import SectionHeading from "../ui/SectionHeading";
import StatusIndicator from "./StatusIndicator";
import StatusRow from "./StatusRow";
import StorageMeter from "./StorageMeter";
import useSystemStatus from "../../hooks/useSystemStatus";
import { formatUptime } from "../../utils/formatUptime";
import "./SystemStatus.css";

const DEVICE_COUNT_PAD = 2;

function formatDeviceCount(count) {
  return String(count).padStart(DEVICE_COUNT_PAD, "0");
}

function formatStorage(usedGb, totalGb) {
  return `${usedGb} GB / ${totalGb} GB`;
}

/**
 * Live readout of the DEPOT host.
 *
 * Every value comes from `useSystemStatus`, which is the single seam that will
 * later be pointed at `GET /api/status` — this component never touches data
 * fetching itself.
 */
function SystemStatus() {
  const { status, uptimeSeconds, isLoading, error } = useSystemStatus();

  if (error) {
    return (
      <section
        className="depot-status depot-section"
        id="system"
        aria-labelledby="system-title"
      >
        <div className="depot-shell">
          <SectionHeading
            id="system-title"
            eyebrow="Live status"
            title="System information"
          />
          <p className="depot-status__message" role="status">
            The DEPOT host is not responding on the local network.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="depot-status depot-section"
      id="system"
      aria-labelledby="system-title"
    >
      <div className="depot-shell depot-status__layout">
        <SectionHeading
          id="system-title"
          eyebrow="Live status"
          title="System information"
          description="Read continuously from the Raspberry Pi running DEPOT on the local network."
        />

        {isLoading ? (
          <p className="depot-status__message" role="status">
            Reading system status…
          </p>
        ) : (
          <dl
            className="depot-status__readout"
            aria-label="DEPOT host status"
          >
            <StatusRow label="Network">
              <StatusIndicator
                label={`${status.network.label} / ${status.network.state}`}
              />
            </StatusRow>

            <StatusRow label="Connected devices">
              {formatDeviceCount(status.connectedDevices)}
            </StatusRow>

            <StatusRow
              label="Storage"
              detail={
                <StorageMeter
                  usedGb={status.storage.usedGb}
                  totalGb={status.storage.totalGb}
                />
              }
            >
              {formatStorage(
                status.storage.usedGb,
                status.storage.totalGb,
              )}
            </StatusRow>

            <StatusRow label="Server">
              <StatusIndicator
                label={status.server.label}
                tone={
                  status.server.state === "running" ? "positive" : "neutral"
                }
              />
            </StatusRow>

            <StatusRow label="Uptime">
              {formatUptime(uptimeSeconds)}
            </StatusRow>
          </dl>
        )}
      </div>
    </section>
  );
}

export default SystemStatus;
