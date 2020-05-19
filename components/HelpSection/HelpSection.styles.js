import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: "80px 0",
    },
    wrapper: {
      maxWidth: "800px",
      margin: "auto",
    },
    headline: {
      fontSize: "36px",
      fontFamily: variables.helvetica,
      lineHeight: 1.33,
      textAlign: "center",
      ...breakpoint(keys.sm, "down", {
        fontSize: "28px",
      }),
    },
    data: {
      position: "relative",
      marginTop: "80px",
      display: "flex",
      "&:last-child": {
        flexDirection: "row-reverse",
      },
      ...breakpoint(keys.sm, "down", {
        flexDirection: "column !important",
      }),
    },
    help: {
      paddingLeft: "80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingRight: "15px",
      ...breakpoint(keys.md, "down", {
        paddingLeft: "30px",
        paddingRight: 0,
      }),
      ...breakpoint(keys.sm, "down", {
        padding: 0,
        marginTop: "30px",
      }),
    },
    helpReverse: {
      paddingLeft: "15px",
      paddingRight: "80px",
      textAlign: "right",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      ...breakpoint(keys.md, "down", {
        paddingRight: "30px",
        paddingLeft: 0,
      }),
      ...breakpoint(keys.sm, "down", {
        padding: 0,
        marginTop: "30px",
      }),
      "& > div": {
        left: "30%",
        ...breakpoint(keys.md, "down", {
          left: "23%",
        }),
        ...breakpoint(keys.sm, "down", {
          left: "50%",
        }),
      },
    },
    title: {
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      letterSpacing: "2.4px",
      textTransform: "uppercase",
      color: variables.primary,
      paddingBottom: "17px",
    },
    subTitle: {
      fontFamily: variables.helvetica,
      fontSize: "22px",
      lineHeight: 1.45,
      paddingBottom: "12px",
    },
    description: {
      fontFamily: variables.openSans,
      fontSize: "12px",
      lineHeight: 1.83,
    },
    overlay: {
      position: "absolute",
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      color: "#eeeeee",
      fontSize: "427px",
      zIndex: -1,
      transform: "translate(-50%, -50%)",
      top: "30%",
      left: "60%",
      whiteSpace: "nowrap",
      height: "100%",
      ...breakpoint(keys.md, "down", {
        fontSize: "250px",
        top: "50%",
        left: "70%",
      }),
      ...breakpoint(keys.sm, "down", {
        left: "50%",
        bottom: 0,
        top: "100%",
      }),
    },
    image: {
      ...breakpoint(keys.sm, "down", {
        maxWidth: "350px",
        margin: "auto",
      }),
    },
  };
});

export default useStyles;
