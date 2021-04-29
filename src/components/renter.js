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

const Renter =()=>{

    
  const classes = userStyles();
  const bull = <span className={classes.bullet}>•</span>;
      

    const [renter, setRenter]= useState([]);
    const [itemData, setItemData]=useState([])
    //getting data

    useEffect(()=>{
        axiosWithAuth()
        .get('https://techstufflambda.herokuapp.com/api/users') //API renter FROM UNIT 4
        .then(res =>{
            console.log(res.data);
            setRenter(res.data);
        
        })
        .catch(err => console.log(err))
        
    }, [])

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://techstufflambda.herokuapp.com/api/techitems/`) //API OWNER/data FROM UNIT 4
        .then(res =>{
            //console.log(res.data);
            setItemData(res.data);
            console.log(res)
        })
        .catch(err => console.log(err))
        
    }, [renter])

    // const itemMap = (ownerData) => {
      
    // }
    return(

      <Grid container className={classes.root} spacing={2}>
        {/* {renter.map(res=>{
          return(
            <p>{res.username}</p>
          )
        })} */}
        <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}> 
          {itemData.map(res=>{
            return (
              <Box className={classes.box}>
                  <h1>{res.tech_item_title}</h1>
                  <p>{res.tech_item_price}</p>
                  <p>{res.tech_item_description}</p>
              </Box>
            )
          })}
        </Grid>
      </Grid>
    )

}

export default Renter;
