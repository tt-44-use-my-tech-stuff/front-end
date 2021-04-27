//styles sheet
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexFlow: "column",
    alignItems: "center",
    height: "200vh"
  },
  paper: {
    width: "30%",
    marginTop: "12%",
    padding: "2%",
    // Gradient for div
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "5px 4px 5px 4px rgba(33, 203, 243, .3)",
    borderRadius: "20px"
  },
  paperItem: {
    color: "#fff",
    marginTop: "7%",
    marginBottom: "2%"
  },
  topText: {
    width: "100%",
    textAlign: "center"
  },
  formGrid: {
    flexFlow: "column",
    alignItems: "center"
  },
  login: {
    color: "black",
    marginTop: "7%",
    marginBottom: "2%"
  }
});

export default useStyles;
