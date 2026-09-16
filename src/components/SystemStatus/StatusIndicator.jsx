import "./StatusIndicator.css";

/**
 * Dot plus label used for the network and server states.
 *
 * `tone` maps to the semantic colour so callers never pass a raw colour.
 */
function StatusIndicator({ label, tone = "positive" }) {
  return (
    <span className="depot-indicator">
      <span
        className={`depot-indicator__dot depot-indicator__dot--${tone}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export default StatusIndicator;
