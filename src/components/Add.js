import React, { useState } from "react";
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormControl
  // makeStyles
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import useStyles from "../styles/StylesSheet";
import {axiosWithAuth} from "../helpers/axiosWithAuth";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";

const defaultValues = {
  name: "",
  price: "",
  rentalPeriod: "",
  rentalPeriodMin: 0,
  rentalPeriodMax: 0,
  category: "",
  description: ""
};

const defaultErrors = {
  name: "",
  price: "",
  rentalPeriodMin: 0,
  rentalPeriodMax: 0,
  category: "",
  description: ""
};

const AddItem = (state) => {
    const classes = useStyles();
    const [values, setValues] = useState(defaultValues);
    const [formValues, setFormValues] = useState(defaultValues);
    const [helperText, setHelperText] = useState(defaultErrors);
    const priceValidate = values.price.match(/^\w{1,10}$/g);
    const {push} = useHistory()

    const onChange = (evt) => {
        const { name, value } = evt.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        const newItem = {
            tech_item_title: values.name,
            tech_item_price: parseInt(values.price),
            min_rental_period: parseInt(values.rentalPeriodMin),
            max_rental_period: parseInt(values.rentalPeriodMax),
            tech_item_description: values.description,
            category_name: values.category
        };
        if (
        true 
        ) {
            axiosWithAuth()
            .post(`https://use-my-tech-stuff-backend-1.herokuapp.com/api/tech_items`, newItem)
            .then(res =>{
                console.log(state)
                console.log(res);
                // push("/owner")
            })
            .catch(err => {console.log(err.response)
            console.log(newItem)}
            )

        } else {
            setHelperText({
                name: "Please enter a name between 2 and 15 characters long",
                price: "Please enter a price between 1 and 10 characters long",
                rentalPeriod:
                "Please enter a rental period between 2 and 15 characters long",
                category: "Please choose a category",
                description:
                "Please enter a description between 2 and 30 characters long"
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
              Create New Item
            </Typography>
          </Grid>
          <form onSubmit={onSubmit}>
            <Grid container className={classes.formGrid}>
              <TextField
                variant="filled"
                className={classes.paperItem}
                fullWidth
                required
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={onChange}
                autoComplete="off"
                InputLabelProps={{
                  style: { color: "#fff" }
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                helperText={priceValidate ? "" : helperText.price}
                type="text"
                label="Price"
                name="price"
                value={values.price}
                onChange={onChange}
                autoComplete="off"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <MonetizationOnIcon />
                    </IconButton>
                  )
                }}
                InputLabelProps={{
                  style: { color: "#fff" }
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Rental Period Min"
                name="rentalPeriodMin"
                value={values.rentalPeriodMin}
                onChange={onChange}
                autoComplete="off"
                InputLabelProps={{
                  style: { color: "#fff" }
                }}
              />
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Rental Period Max"
                name="rentalPeriodMax"
                value={values.rentalPeriodMax}
                onChange={onChange}
                autoComplete="off"
                InputLabelProps={{
                  style: { color: "#fff" }
                }}
              />
              <FormControl fullWidth className={classes.paperItem}>
                <InputLabel id="Category" className={classes.paperItem}>
                  Category
                </InputLabel>
                <Select
                  variant="filled"
                  fullWidth
                  labelId="Category"
                  value={values.category}
                  className={classes.paperItem}
                  onChange={onChange}
                  name="category"
                >
                  <MenuItem value="camera">Camera</MenuItem>
                  <MenuItem value="sound">Sound</MenuItem>
                  <MenuItem value="visual">Visual</MenuItem>
                  <MenuItem value="gaming">Gaming</MenuItem>
                  <MenuItem value="computer">Computer</MenuItem>
                  <MenuItem value="misc">Misc</MenuItem>
                </Select>
              </FormControl>
              <TextField
                variant="filled"
                className={`${classes.paperItem}`}
                fullWidth
                required
                type="text"
                label="Description"
                name="description"
                value={values.description}
                onChange={onChange}
                autoComplete="off"
                InputLabelProps={{
                  style: { color: "#fff" }
                }}
              />
              <Button
                className={`${classes.submit}`}
                size="large"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
}
const mapStateToProps = state =>{
    return({
        username:state.username,
        userId:state.userId
    })
}

export default connect(mapStateToProps)(AddItem);