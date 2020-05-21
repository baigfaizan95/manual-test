import { makeStyles } from "@material-ui/core/styles";
import variables from "@/styles/variables";

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: "17px 38px",
      backgroundColor: variables.primary,
      color: variables.white,
      fontFamily: variables.montserrat,
      fontWeight: "bold",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "2.4px",
      borderRadius: "49.5px",
      boxShadow: "0 10px 30px -20px rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      transition: "box-shadow 0.3s",
      "&:hover": {
        boxShadow: "0 10px 30px -17px rgba(0, 0, 0, 0.5)",
      },
      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: "rgba(141, 207, 210, 0.5)",
      },
    },
  };
});

export default useStyles;
