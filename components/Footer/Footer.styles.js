import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundColor: " #e5f5f4",
      padding: "78px 0 27px",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    logo: {
      "& img": {
        height: "80px",
        width: "75px",
      },
      flex: "2",
      paddingLeft: "40px",
      ...breakpoint(keys.md, "down", {
        flex: "1",
        paddingLeft: 0,
      }),
      ...breakpoint(keys.sm, "down", {
        flex: "1 0 100%",
        marginBottom: "30px",
      }),
    },
    links: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      maxWidth: "160px",
      "&:last-child": {
        marginRight: "120px",
      },
      ...breakpoint(keys.lp, "down", {
        "&:last-child": {
          marginRight: "0",
        },
      }),
      ...breakpoint(keys.sm, "down", {
        flex: "1 0 50%",
        marginBottom: "27px",
        maxWidth: "100%",
      }),
    },
    title: {
      color: variables.primary,
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "2.4px",
      fontSize: "12px",
      marginBottom: "17px",
    },
    link: {
      fontFamily: variables.helvetica,
      fontSize: "14px",
      lineHeight: "2.57",
    },
    socialLink: {
      marginRight: "30px",
      "& > img": {
        height: "20px",
        width: "20px",
      },
      "&:last-child": {
        marginRight: "0",
      },
    },
    copyRight: {
      borderTop: "solid 1px #6c6c6c",
      opacity: "0.3",
      paddingTop: "26px",
      marginTop: "66px",
      textAlign: "center",
      fontFamily: variables.openSans,
      fontSize: "12px",
      color: "rgb(108, 108, 108)",
      lineHeight: 1.83,
    },
  };
});

export default useStyles;
