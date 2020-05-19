import React from "react";
import Container from "@material-ui/core/Container";

import Hair from "@/assets/hair.jpg";
import Hand from "@/assets/hand.jpg";

import useStyles from "./HelpSection.styles";

const data = [
  {
    logo: Hair,
    title: "HAIR LOSS",
    subTitle: "Hair loss needn’t be irreversible. We can help!",
    description:
      "Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.",
  },
  {
    logo: Hand,
    title: "Erectile Dysfunction",
    subTitle: "Erections can be a tricky thing. But no need to feel down!",
    description:
      "There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.",
  },
];

const HelpSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.wrapper}>
          <p className={classes.headline}>What we can help with</p>
          {data.map((d, i) => (
            <div className={classes.data} key={i}>
              <img className={classes.image} src={d.logo} alt="logo" />
              <div className={i % 2 === 0 ? classes.help : classes.helpReverse}>
                <p className={classes.title}>{d.title}</p>
                <p className={classes.subTitle}>{d.subTitle}</p>
                <p className={classes.description}>{d.description}</p>
                <div className={classes.overlay}>0{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HelpSection;
