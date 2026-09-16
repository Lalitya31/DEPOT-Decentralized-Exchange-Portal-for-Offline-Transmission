import "./SectionHeading.css";

/**
 * Shared section header: eyebrow, title and optional supporting copy.
 *
 * Keeping this in one place is what holds the type scale and vertical rhythm
 * identical across every section of the page.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  children,
}) {
  return (
    <header
      className={`depot-heading depot-heading--${align}`}
      aria-labelledby={id}
    >
      {eyebrow ? <p className="depot-heading__eyebrow">{eyebrow}</p> : null}

      <h2 className="depot-heading__title" id={id}>
        {title}
      </h2>

      {description ? (
        <p className="depot-heading__description">{description}</p>
      ) : null}

      {children ? <div className="depot-heading__aside">{children}</div> : null}
    </header>
  );
}

export default SectionHeading;
