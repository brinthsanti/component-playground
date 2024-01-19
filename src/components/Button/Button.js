const BtnTypes = {
  primary: "primary",
  secondary: "secondary",
  classic: "classic",
};

const sizes = {
  small: "small",
  large: "large",
};
function Button({
  children,
  type = "primary",
  size = "large",
  disabled = false,
  onClick,
  loading = false,
}) {
  const classes = [
    "appBtn",
    type ? BtnTypes[type] : "",
    size ? sizes[size] : "",
    disabled || loading ? "disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? <span className="loader"></span> : null}
      <div>{children}</div>
    </button>
  );
}

export default Button;
