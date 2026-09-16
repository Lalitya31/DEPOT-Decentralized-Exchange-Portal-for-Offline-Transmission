import "./StatusRow.css";

/**
 * A single labelled datum in the system readout.
 *
 * Layout is a label/value pair on one hairline-ruled line, which is what makes
 * the section read as a real system interface rather than a marketing block.
 */
function StatusRow({ label, detail, children }) {
  return (
    <div
      className={
        detail
          ? "depot-status-row depot-status-row--stacked"
          : "depot-status-row"
      }
    >
      <dt className="depot-status-row__label">{label}</dt>
      <dd className="depot-status-row__value">{children}</dd>
      {detail ? (
        <div className="depot-status-row__detail">{detail}</div>
      ) : null}
    </div>
  );
}

export default StatusRow;
