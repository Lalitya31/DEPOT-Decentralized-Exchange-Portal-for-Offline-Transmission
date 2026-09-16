import "./Footer.css";

const FOOTER_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Messaging", href: "#messaging" },
  { label: "Files", href: "#files" },
  { label: "System", href: "#system" },
  { label: "How it works", href: "#how-it-works" },
];

function Footer() {
  return (
    <footer className="depot-footer">
      <div className="depot-shell depot-footer__inner">
        <div className="depot-footer__identity">
          <p className="depot-footer__brand">DEPOT</p>
          <p className="depot-footer__tagline">
            Offline Digital Communication and File-Sharing Hub
          </p>
          <p className="depot-footer__credit">Built with Raspberry Pi.</p>
        </div>

        <nav className="depot-footer__nav" aria-label="Footer">
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a className="depot-footer__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
