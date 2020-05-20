import React from "react";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";

/* Assets */
import BannerImage from "@/assets/banner.jpg";

import useStyles from "./Banner.styles";
import Button from "../Button/Button";

const Banner = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/quiz");
  };

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${BannerImage})` }}>
      <Container>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>
            be good <br /> to yourself
          </h1>
          <p className={classes.description}>
            We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside
            and out.
          </p>
          <div className={classes.button}>
            <Button onClick={handleClick}>take the quiz</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
