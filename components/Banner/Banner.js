import React from "react";
import Container from "@material-ui/core/Container";

/* Assets */
import BannerImage from "@/assets/banner.jpg";
import Logo from "@/assets/logo.svg";

import useStyles from "./Banner.styles";
import Button from "../Button/Button";

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${BannerImage})` }}>
      <Container>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>
            be good <br /> to yourself
          </h1>
          <p className={classes.description}>
            We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside
            and out.
          </p>
          <div className={classes.button}>
            <Button>take the quiz</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
