import "./StorageMeter.css";

const MAX_PERCENT = 100;

/**
 * Thin utilisation bar for the DEPOT host's disk.
 *
 * Exposed as a progressbar with explicit min/max/now so the value is available
 * to assistive technology and not only as a coloured line.
 */
function StorageMeter({ usedGb, totalGb, label = "Storage used" }) {
  const percent =
    totalGb > 0
      ? Math.min(MAX_PERCENT, Math.round((usedGb / totalGb) * MAX_PERCENT))
      : 0;

  return (
    <div
      className="depot-meter"
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={totalGb}
      aria-valuenow={usedGb}
      aria-valuetext={`${usedGb} GB of ${totalGb} GB used`}
    >
      <div
        className="depot-meter__fill"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default StorageMeter;
