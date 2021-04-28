//styles sheet
import { makeStyles } from "@material-ui/core";

const userStyles = makeStyles({
  root: {
    flexFlow: "column",
    alignItems: "center",
    height: "200vh",

  },
  box: {
    width: "30%",
    marginTop: "12%",
    marginRight:"5%",
    padding: "2%",
    // Gradient for div
    background: "linear-gradient(45deg, #d6d6d6 30%, #f2f2f2 90%)",
    boxShadow: "5px 4px 5px 4px rgba(53, 134, 194, .3)",
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

export default userStyles;