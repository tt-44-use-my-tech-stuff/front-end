import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton
  // makeStyles
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "../styles/StylesSheet";
import axios from "axios";
import {useHistory} from "react-router-dom";

//initial values
const initialValues = {
  username: "",
  password: ""
};

const initialHelperText = {
  username: "",
  password: ""
};

const LoginForm = () => {
  const classes = useStyles();
  //set state
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(initialHelperText);

  //push
  const {push} = useHistory();

  //view pass
  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
  };

  //onChange -> use spread op
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  //onSubmit?
  const submit = (e) => {
    console.log(values)
    e.preventDefault();
      axios
      .post('https://techstufflambda.herokuapp.com/auth/login', values)
      .then(res =>{
        window.localStorage.setItem('token', JSON.stringify(res.action.payload));
        console.log(res)
        push('/owner')})
      .catch(err => console.log(err))
  };

  // inputs and submit buttons
  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Login
            </Typography>
          </Grid>
          <form onSubmit={submit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.username}
                type="text"
                label="Username"
                name="username"
                value={values.username}
                onChange={onChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  )
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={helperText.password}
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={onChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />
              <Button
                className={`${classes.login}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default LoginForm;