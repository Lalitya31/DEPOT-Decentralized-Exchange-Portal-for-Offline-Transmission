import "./Button.css";

/**
 * The single button primitive for the site.
 *
 * Renders an `<a>` when `href` is supplied and a `<button>` otherwise, so
 * navigation and in-page actions stay semantically correct and keyboard
 * accessible without duplicating styling.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "regular",
  className = "",
  type = "button",
  ...rest
}) {
  const classes = [
    "depot-button",
    `depot-button--${variant}`,
    size === "large" ? "depot-button--large" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        <span className="depot-button__label">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      <span className="depot-button__label">{children}</span>
    </button>
  );
}

export default Button;
