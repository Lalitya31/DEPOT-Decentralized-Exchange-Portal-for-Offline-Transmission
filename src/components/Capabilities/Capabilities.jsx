import SectionHeading from "../ui/SectionHeading";
import CapabilityIcon from "./CapabilityIcon";
import "./Capabilities.css";

const CAPABILITIES = [
  {
    id: "messaging",
    icon: "messaging",
    title: "Messaging",
    copy: "Exchange text messages with other devices connected to the local network.",
  },
  {
    id: "files",
    icon: "files",
    title: "File Sharing",
    copy: "Upload and download files directly through the local DEPOT network.",
  },
  {
    id: "storage",
    icon: "storage",
    title: "Local Storage",
    copy: "Keep messages and files on the Raspberry Pi instead of relying on cloud infrastructure.",
  },
];

/**
 * The three core capabilities. Separated by rules rather than boxed into
 * cards, so the section stays as light as the rest of the page.
 */
function Capabilities() {
  return (
    <section
      className="depot-capabilities depot-section"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="depot-shell">
        <SectionHeading
          id="capabilities-title"
          eyebrow="Capabilities"
          title="Everything stays on the local network."
          description="DEPOT handles the three things a disconnected group actually needs, without a cloud account or an external connection."
        />

        <ul className="depot-capabilities__list">
          {CAPABILITIES.map((capability) => (
            <li
              className="depot-capabilities__item"
              id={capability.id}
              key={capability.id}
            >
              <CapabilityIcon name={capability.icon} />

              <h3 className="depot-capabilities__title">{capability.title}</h3>

              <p className="depot-capabilities__copy">{capability.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Capabilities;
