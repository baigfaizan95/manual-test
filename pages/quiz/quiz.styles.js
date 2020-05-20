import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingTop: "75px",
      paddingBottom: "60px",
    },
    question: {
      fontSize: "28px",
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: "20px",
      ...breakpoint(keys.sm, "down", {
        fontSize: "24px",
      }),
    },
    wrapper: {
      paddingTop: "20px",
    },
    options: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      paddingTop: "30px",
      "& img": {
        ...breakpoint(keys.sm, "down", {
          width: "120px",
        }),
      },
    },
    value: {
      fontSize: "18px",
      fontFamily: variables.helvetica,
      lineHeight: 1.3,
      ...breakpoint(keys.sm, "down", {
        fontSize: "14px",
      }),
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "40px",
      "& > button": {
        marginLeft: "15px",
        "&:first-child": {
          marginLeft: 0,
        },
      },
    },
    result: {
      paddingTop: "40px",
    },
    status: {
      marginBottom: "30px",
      textAlign: "center",
    },
    description: {
      fontFamily: variables.openSans,
      textAlign: "center",
      fontSize: "20px",
      "& a": {
        color: variables.primary,
      },
    },
  };
});

export default useStyles;
