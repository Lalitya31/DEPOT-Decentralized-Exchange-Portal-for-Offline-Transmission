/**
 * Canonical REST surface exposed by the DEPOT Raspberry Pi host.
 *
 * The frontend is built against these paths today so that wiring the real
 * device later is a change of transport, not a change of contract.
 */
export const DEPOT_API_BASE = "/api";

export const ENDPOINTS = {
  status: `${DEPOT_API_BASE}/status`,

  messages: `${DEPOT_API_BASE}/messages`,

  files: `${DEPOT_API_BASE}/files`,
  fileById: (fileId) => `${DEPOT_API_BASE}/files/${encodeURIComponent(fileId)}`,
};

export default ENDPOINTS;
