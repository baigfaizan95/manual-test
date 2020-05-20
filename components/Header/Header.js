import React from "react";
import Container from "@material-ui/core/Container";
import Link from "next/link";

import Logo from "@/assets/logo.svg";

import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.logo}>
          <Link href="/">
            <a>
              <img src={Logo} alt="logo" />
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header;
