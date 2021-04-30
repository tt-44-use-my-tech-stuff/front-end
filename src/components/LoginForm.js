import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton
  // makeStyles
} from "@material-ui/core";
import { AccountCircle, SettingsPowerRounded, Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "../styles/StylesSheet";
import axios from "axios";
import {connect} from"react-redux";
import {loginNow} from "../action"
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

const LoginForm = (props) => {
  const classes = useStyles();
  //set state
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(initialHelperText);
  const [error, setError] = useState('')
  //push
 const {push}= useHistory();

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
    e.preventDefault();
    props.loginNow(values);
  };

  useEffect(()=>{
    if(props.userType){
      if(props.userType === "owner"){
        push('/owner')
      }
      else{
        push('/renter')
      }
    }
  }, props.userType)

  

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
             {error ? <p>{error}</p>: <p></p> }

            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
const mapStateToProps = state =>{
  return({
    username:state.username,
    userType:state.userType
  })
}

export default connect(mapStateToProps, {loginNow})(LoginForm);