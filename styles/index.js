import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import variables from "./variables";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        "@media (min-width: 960px)": {
          paddingLeft: "40px",
          paddingRight: "40px",
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          boxSizing: "border-box",
          wordBreak: "break-word",
          margin: 0,
          padding: 0,
          border: 0,
          outline: "none",
          background: "transparent",
          touchAction: "manipulation",
          "&:before, &:after": {
            boxSizing: "border-box",
            wordBreak: "break-word",
          },
          "&:focus": {
            outline: "none",
          },
        },
        a: {
          color: "inherit",
          textDecoration: "none",
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          color: variables.fontColor,
          fontFamily: variables.fontFamily,
        },
        img: {
          width: "100%",
          height: "auto",
        },
      },
    },
  },
});

export default theme;
