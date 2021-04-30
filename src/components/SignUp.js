import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  FormHelperText,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel
} from "@material-ui/core";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import useStyles from "../styles/StylesSheet";
import axios from 'axios';
const initialFormValues = {
  username: "",
  password: "",
  role_id: ""
};

const initialHelperText = {
  username: "",
  password: "",
  role_id: ""
};

const RegistrationForm = () => {
  //state
  const [showPassword, setShowPassword] = useState(false);
  const [helperText, setHelperText] = useState(initialHelperText);
  const [formValues, setFormValues] = useState(initialFormValues);
  //stylesheet
  const classes = useStyles();
  //error/helper text validation
  const usernameValidate = formValues.username.match(/^\w{3,15}$/g);
  const passwordValidate = formValues.password.match(/^[.\S]{3,15}$/g);
  const roleValidate = formValues.role_id === "1" || formValues.role_id === "2";

  const revealPassword = (evt) => {
    setShowPassword(!showPassword);
  };

  const toChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const toSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role_id:  parseInt(formValues.role_id)
    };

    if (usernameValidate && passwordValidate && roleValidate) {
      axios
      .post('https://use-my-tech-stuff-backend-1.herokuapp.com/api/auth/register', newUser)
      .then(res =>{
          console.log(res.data)
      })
      .catch(err =>{console.log(err.response)})
    } else {
      setHelperText({
        username: "Please enter a username between 8 and 12 characters long",
        password: "Please enter a password between 8 and 12 characters long",
        role_id: "Please select either Owner or Renter for your account"
      });
    }
  };

  return (
    <>
      <Grid container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography
              variant="h3"
              className={`${classes.topText} ${classes.paperItem}`}
            >
              Create Your Account
            </Typography>
          </Grid>

          <form onSubmit={toSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={classes.paperItem}
                fullWidth
                required
                helperText={usernameValidate ? "" : helperText.username}
                type="text"
                label="Username"
                name="username"
                value={formValues.username}
                onChange={toChange}
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
                className={classes.paperItem}
                fullWidth
                required
                helperText={passwordValidate ? "" : helperText.password}
                type={showPassword ? "text" : "password"}
                label="Password"
                name="password"
                value={formValues.password}
                onChange={toChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={revealPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  )
                }}
              />

              <FormLabel>
                Do you want to register as an owner (renting out your tech stuff
                to others) or a renter (renting tech stuff from others)?
              </FormLabel>
              <RadioGroup
                required
                error={helperText.role_id}
                name="role_id"
                value={formValues.role_id}
                onChange={toChange}
                color="primary"
              >
                <FormControlLabel
                  name="role_id"
                  value="1"
                  control={<Radio />}
                  label="Owner"
                  checked={formValues.role_id === "1"}
                  color="primary"
                />
                <FormControlLabel
                  name="role_id"
                  value="2"
                  control={<Radio />}
                  label="Renter"
                  checked={formValues.role_id === "2"}
                />
              </RadioGroup>
              <FormHelperText>
                {roleValidate ? "" : helperText.role_id}
              </FormHelperText>

              <Button
                className={classes.login}
                size="large"
                variant="contained"
                type="submit"
              >
                Create Account
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default RegistrationForm;
