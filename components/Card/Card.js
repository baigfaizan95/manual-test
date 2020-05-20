import React from "react";

import useStyles from "./Card.styles";

const Card = ({ children, className = "", active, onClick }) => {
  const classes = useStyles();

  return (
    <div onClick={onClick} className={`${classes.root} ${active ? classes.active : ""} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;
