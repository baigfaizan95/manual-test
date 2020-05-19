import React from "react";

import useStyles from "./Button.styles";

const Button = ({ onClick, children, styles = {}, className = "" }) => {
  const classes = useStyles();

  return (
    <button className={`${classes.root} ${className}`.trim()} styles={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
