import React from "react";

import useStyles from "./Button.styles";

const Button = ({ onClick, children, styles = {}, className = "", disabled }) => {
  const classes = useStyles();

  return (
    <button
      disabled={disabled}
      className={`${classes.root} ${className}`.trim()}
      style={{ ...styles }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
