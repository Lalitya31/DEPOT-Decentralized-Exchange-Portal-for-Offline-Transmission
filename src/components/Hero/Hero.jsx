import Button from "../ui/Button";
import "./Hero.css";

const HERO_FACTS = [
  { label: "Network", value: "Local Wi-Fi" },
  { label: "Host", value: "Raspberry Pi" },
  { label: "Requires internet", value: "No" },
];

/**
 * Editorial opening statement. Deliberately text-only: the type hierarchy does
 * the work, so no illustration or decoration is needed.
 */
function Hero() {
  return (
    <section className="depot-hero" id="top">
      <div className="depot-shell depot-hero__inner">
        <p className="depot-eyebrow depot-hero__eyebrow">
          Offline Digital Communication Hub
        </p>

        <h1 className="depot-hero__title">
          Communication without the internet.
        </h1>

        <p className="depot-hero__lede">
          DEPOT is a portable offline communication and file-sharing hub powered
          by Raspberry Pi. Connect locally, exchange information, and keep your
          data on the network.
        </p>

        <div className="depot-hero__actions">
          <Button href="#system" size="large">
            Open Depot
          </Button>

          <Button href="#how-it-works" variant="link" size="large">
            How it works
          </Button>
        </div>

        <dl className="depot-hero__facts">
          {HERO_FACTS.map((fact) => (
            <div className="depot-hero__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
