import "./SystemOverview.css";

const FLOW_STEPS = [
  {
    id: "device",
    label: "Your device",
    detail: "Phone or laptop joined to the DEPOT network.",
  },
  {
    id: "depot",
    label: "DEPOT",
    detail: "The Raspberry Pi acting as the local communication hub.",
  },
  {
    id: "nearby",
    label: "Nearby devices",
    detail: "Everyone else connected to the same local network.",
  },
];

/**
 * Typographic explanation of how a device reaches the hub and the peers
 * around it. No cards — the connecting rules carry the structure.
 */
function SystemOverview() {
  return (
    <section
      className="depot-overview depot-section"
      id="overview"
      aria-labelledby="overview-title"
    >
      <div className="depot-shell">
        <h2 className="depot-visually-hidden" id="overview-title">
          System overview
        </h2>

        <p className="depot-eyebrow">System</p>

        <p className="depot-overview__statement">
          Your device <span className="depot-overview__arrow" aria-hidden="true" />
          <span className="depot-overview__hub">DEPOT</span>{" "}
          <span className="depot-overview__arrow" aria-hidden="true" />
          Nearby devices
        </p>

        <ol className="depot-overview__flow">
          {FLOW_STEPS.map((step) => (
            <li className="depot-overview__step" key={step.id}>
              <h3 className="depot-overview__step-label">{step.label}</h3>
              <p className="depot-overview__step-detail">{step.detail}</p>
            </li>
          ))}
        </ol>

        <p className="depot-lede depot-overview__note">
          The Raspberry Pi hosts its own wireless network and runs the DEPOT
          interface locally. Devices nearby join that network directly, so every
          message and file travels between them and the hub — never through an
          external provider.
        </p>
      </div>
    </section>
  );
}

export default SystemOverview;
