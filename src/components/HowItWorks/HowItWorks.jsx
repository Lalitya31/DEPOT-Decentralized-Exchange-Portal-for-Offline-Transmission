import SectionHeading from "../ui/SectionHeading";
import "./HowItWorks.css";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    copy: "Join the DEPOT Wi-Fi network.",
  },
  {
    number: "02",
    title: "Open",
    copy: "Access the locally hosted DEPOT interface.",
  },
  {
    number: "03",
    title: "Exchange",
    copy: "Send messages and share files with nearby devices.",
  },
];

/**
 * The three-step flow. Runs horizontally once there is room, and stacks into a
 * numbered list on phones, where most DEPOT users will actually read it.
 */
function HowItWorks() {
  return (
    <section
      className="depot-how depot-section"
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="depot-shell">
        <SectionHeading
          id="how-it-works-title"
          eyebrow="How it works"
          title="Three steps, no configuration."
          description="Nothing to install and no account to create. A device only ever needs to join the network and open the interface."
        />

        <ol className="depot-how__steps">
          {STEPS.map((step) => (
            <li className="depot-how__step" key={step.number}>
              <span className="depot-how__number" aria-hidden="true">
                {step.number}
              </span>

              <h3 className="depot-how__title">
                <span className="depot-visually-hidden">
                  Step {step.number}:{" "}
                </span>
                {step.title}
              </h3>

              <p className="depot-how__copy">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
