import React from "react";
import Container from "@material-ui/core/Container";
import Link from "next/link";

/* Assets */
import Logo from "@/assets/logo.svg";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import Linkedin from "@/assets/linkedin.svg";

import useStyles from "./Footer.styles";

const data = [
  {
    title: "product",
    links: [
      { title: "popular", href: "/popular" },
      { title: "trending", href: "/trending" },
      { title: "guided", href: "/guided" },
      { title: "products", href: "/products" },
    ],
  },
  {
    title: "company",
    links: [
      { title: "press releases", href: "/press-releases" },
      { title: "mission", href: "/mission" },
      { title: "strategy", href: "/strategy" },
      { title: "about", href: "/about" },
    ],
  },
  {
    title: "info",
    links: [
      { title: "support", href: "/support" },
      { title: "customer service", href: "/customer-service" },
      { title: "get started guide", href: "/get-started-guide" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: "" },
  { icon: Twitter, href: "" },
  { icon: Linkedin, href: "" },
];
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={Logo} alt="logo" />
          </div>
          {data.map((d, i) => (
            <div className={classes.links} key={i}>
              <p className={classes.title}>{d.title}</p>
              {d.links.map((link, j) => (
                <Link key={j} href={link.href}>
                  <a className={classes.link}>{link.title}</a>
                </Link>
              ))}
            </div>
          ))}
          <div className={classes.links}>
            <p className={classes.title}>follow us</p>
            <div>
              {socials.map((social, i) => (
                <a key={i} className={classes.socialLink} href={social.href} target="_blank" rel="noopenner noreferrer">
                  <img src={social.icon} alt="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.copyRight}>
          <p>&copy; 2019 Manual. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
