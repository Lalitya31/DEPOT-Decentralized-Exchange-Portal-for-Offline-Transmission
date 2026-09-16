const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;

function pad(value) {
  return String(value).padStart(2, "0");
}

/**
 * Render an uptime duration as a fixed-width HH:MM:SS clock.
 *
 * @param {number} totalSeconds Seconds since the DEPOT server started.
 * @returns {string} e.g. "03:42:17"
 */
export function formatUptime(totalSeconds) {
  const safeSeconds = Number.isFinite(totalSeconds)
    ? Math.max(0, Math.floor(totalSeconds))
    : 0;

  const hours = Math.floor(safeSeconds / SECONDS_PER_HOUR);
  const minutes = Math.floor(
    (safeSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE,
  );
  const seconds = safeSeconds % SECONDS_PER_MINUTE;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export default formatUptime;
