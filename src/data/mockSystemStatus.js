/**
 * Placeholder system snapshot.
 *
 * The shape mirrors the payload the DEPOT host is expected to return from
 * `GET /api/status`, so replacing this module with a live fetch is a
 * one-line change inside `useSystemStatus`.
 */
export const mockSystemStatus = {
  network: {
    label: "LOCAL",
    state: "ACTIVE",
    ssid: "DEPOT-01",
  },
  connectedDevices: 7,
  storage: {
    usedGb: 2.4,
    totalGb: 16,
  },
  server: {
    label: "RUNNING",
    state: "running",
  },
  uptimeSeconds: 13337,
};

export default mockSystemStatus;
