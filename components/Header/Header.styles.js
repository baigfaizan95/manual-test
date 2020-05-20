import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      position: "absolute",
      top: 0,
    },
    logo: {
      paddingTop: "30px",
      paddingLeft: "50px",
      "& img": {
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
