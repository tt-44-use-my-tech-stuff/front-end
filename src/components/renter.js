import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from"axios";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  IconButton
  // makeStyles
} from "@material-ui/core";
import userStyles from "../styles/UserStyles";
import { connect } from "react-redux";

const Renter =(state)=>{

    
  const classes = userStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [itemData, setItemData]=useState([])
    //getting data


  useEffect(()=>{
    axiosWithAuth()
    .get(`/api/tech_items`) //API OWNER/data FROM UNIT 4
    .then(res =>{
      //console.log(res.data);
      setItemData(res.data);
      console.log(res)
    })
    .catch(err => console.log(err))
        
  }, [])

  const rent = (res)=>{
    console.log(res)
  }

    
    return(

      <Grid container className={classes.root} spacing={2}>
        <h1>{state.username}</h1>
        <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}> 
          {itemData.map(res=>{
            return (
              <Box className={classes.box}>
                  <h1>{res.tech_item_title}</h1>
                  <p>{res.tech_item_price}</p>
                  <button onClick={()=>{rent(res.tech_item_id)}}>Rent</button>
                  <p>{res.tech_item_description}</p>
              </Box>
            )
          })}
        </Grid>
      </Grid>
    )

}

const mapStateToProps = state =>{
  console.log("renter state: " + state.username);
  return({
      username:state.username,
      userId:state.userId
  })
}

export default connect(mapStateToProps)(Renter);
