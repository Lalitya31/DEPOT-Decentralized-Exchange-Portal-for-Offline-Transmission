import { ENDPOINTS } from "./endpoints";
import { httpClient } from "./httpClient";

/**
 * Client-side mirror of the DEPOT host API.
 *
 * Nothing on this site calls these functions yet — the UI currently reads from
 * `src/data/mock*.js`. They exist so that the Raspberry Pi endpoints can be
 * dropped in later without reshaping a single component.
 */

/* System ------------------------------------------------------------------ */

/** GET /api/status */
export function fetchSystemStatus(options) {
  return httpClient.get(ENDPOINTS.status, options);
}

/* Messaging --------------------------------------------------------------- */

/** GET /api/messages */
export function fetchMessages(options) {
  return httpClient.get(ENDPOINTS.messages, options);
}

/** POST /api/messages */
export function sendMessage(payload, options) {
  return httpClient.post(ENDPOINTS.messages, payload, options);
}

/* Files ------------------------------------------------------------------- */

/** GET /api/files */
export function fetchFiles(options) {
  return httpClient.get(ENDPOINTS.files, options);
}

/** POST /api/files */
export function uploadFile(payload, options) {
  return httpClient.post(ENDPOINTS.files, payload, options);
}

/** GET /api/files/:id */
export function fetchFileById(fileId, options) {
  return httpClient.get(ENDPOINTS.fileById(fileId), options);
}

export const depotApi = {
  fetchSystemStatus,
  fetchMessages,
  sendMessage,
  fetchFiles,
  uploadFile,
  fetchFileById,
};

export default depotApi;
