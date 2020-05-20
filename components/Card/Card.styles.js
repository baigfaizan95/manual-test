import { makeStyles } from "@material-ui/core/styles";
import variables, { keys } from "@/styles/variables";
import { breakpoint } from "@/styles/mixins";

const useStyles = makeStyles(() => {
  return {
    root: {
      margin: "1rem",
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      padding: "16px",
      cursor: "pointer",
      textAlign: "center",
      ...breakpoint(keys.sm, "down", {
        margin: "0.5rem",
      }),
    },
    active: {
      border: `1px solid ${variables.primary}`,
    },
  };
});

export default useStyles;
