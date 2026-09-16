/**
 * Minimal JSON transport for the DEPOT host.
 *
 * Kept deliberately small and dependency-free: the Raspberry Pi serves the
 * same origin as this bundle, so no CORS or auth negotiation is required.
 */

const REQUEST_TIMEOUT_MS = 8000;

export class DepotApiError extends Error {
  constructor(message, { status = 0, cause } = {}) {
    super(message);
    this.name = "DepotApiError";
    this.status = status;
    this.cause = cause;
  }
}

async function parseBody(response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return null;
  }

  try {
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * Perform a JSON request against the DEPOT host.
 *
 * @param {string} url Absolute or root-relative endpoint.
 * @param {RequestInit} [options] Fetch options; `body` objects are serialised.
 * @returns {Promise<unknown>} Parsed JSON body, or null for empty responses.
 */
export async function requestJson(url, options = {}) {
  const { body, headers, signal, ...rest } = options;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  if (signal) {
    signal.addEventListener("abort", () => controller.abort(), { once: true });
  }

  try {
    const response = await fetch(url, {
      ...rest,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(body === undefined ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });

    if (!response.ok) {
      throw new DepotApiError(`Request to ${url} failed`, {
        status: response.status,
      });
    }

    return await parseBody(response);
  } catch (error) {
    if (error instanceof DepotApiError) {
      throw error;
    }

    throw new DepotApiError(`Unable to reach the DEPOT host at ${url}`, {
      cause: error,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

export const httpClient = {
  get: (url, options) => requestJson(url, { ...options, method: "GET" }),
  post: (url, body, options) =>
    requestJson(url, { ...options, method: "POST", body }),
};

export default httpClient;
