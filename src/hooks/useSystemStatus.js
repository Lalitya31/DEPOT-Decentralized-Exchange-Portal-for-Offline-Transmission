import { useEffect, useState } from "react";
import { mockSystemStatus } from "../data/mockSystemStatus";

const UPTIME_TICK_MS = 1000;

/**
 * Owns the system snapshot rendered by the `SystemStatus` section.
 *
 * The UI talks only to this hook, never to a data source directly. Today it is
 * backed by `mockSystemStatus`; against a real Raspberry Pi it becomes:
 *
 *   const { data } = await depotApi.fetchSystemStatus();
 *
 * and the return shape below stays identical, so no component needs editing.
 */
export function useSystemStatus() {
  // TODO(raspberry-pi): replace with `depotApi.fetchSystemStatus()` plus the
  // loading/error states already wired through `isLoading` and `error`.
  const [status] = useState(mockSystemStatus);
  const [uptimeSeconds, setUptimeSeconds] = useState(status.uptimeSeconds);

  // A live clock is what separates a status readout from a static mock.
  useEffect(() => {
    const intervalId = setInterval(
      () => setUptimeSeconds((seconds) => seconds + 1),
      UPTIME_TICK_MS,
    );

    return () => clearInterval(intervalId);
  }, []);

  return {
    status,
    uptimeSeconds,
    isLoading: false,
    error: null,
  };
}

export default useSystemStatus;
