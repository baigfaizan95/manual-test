import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundSize: "contain",
      height: "680px",
      backgroundColor: "#B8E6E3",
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      ...breakpoint(1099, "down", {
        backgroundSize: "55%",
      }),
      ...breakpoint(keys.sm, "down", {
        height: "630px",
      }),
    },
    wrapper: {
      maxWidth: "650px",
      paddingLeft: "40px",
      paddingTop: "172px",
      ...breakpoint(1099, "down", {
        paddingLeft: 0,
      }),
      ...breakpoint(keys.sm, "down", {
        paddingTop: "130px",
      }),
    },
    title: {
      fontFamily: variables.montserrat,
      fontSize: "82px",
      textTransform: "uppercase",
      lineHeight: 1.2,
      fontWeight: "bold",
      ...breakpoint(1200, "down", {
        fontSize: "64px",
      }),
      ...breakpoint(keys.sm, "down", {
        fontSize: "44px",
      }),
      ...breakpoint(360, "down", {
        fontSize: "38px",
      }),
    },
    description: {
      fontFamily: variables.helvetica,
      fontSize: "18px",
      lineHeight: 1.44,
      maxWidth: "400px",
      margin: "22px 0 38px 10px",
      ...breakpoint(keys.sm, "down", {
        marginLeft: 0,
      }),
    },
    button: {
      marginRight: "10px",
      ...breakpoint(keys.sm, "down", {
        marginLeft: 0,
      }),
    },
    logo: {
      paddingTop: "30px",
      paddingLeft: "50px",
      "& > img": {
        width: "40px",
        height: "37.4px",
      },
      ...breakpoint(1099, "down", {
        paddingLeft: 0,
      }),
    },
  };
});

export default useStyles;
