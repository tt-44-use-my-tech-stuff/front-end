import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import {
  Box,
  Grid
} from "@material-ui/core";
import userStyles from "../styles/UserStyles";
import { connect } from "react-redux";
import {rentingState} from "../action";

const Renter =(props)=>{
  // console.log(props.username);
    
  const classes = userStyles();
  const [itemData, setItemData]=useState([])
  // const [isRented, setIsRented]=useState(false);
    //getting data


  

  useEffect(()=>{
    axiosWithAuth()
    .get(`/api/tech_items`) //API OWNER/data FROM UNIT 4
    .then(res =>{
      //console.log(res.data);
      setItemData(res.data);
      // console.log(res)
    })
    .catch(err => console.log(err.response))
        
  }, [])


  console.log("props: ")
  console.log(props)
  const rent = (itemId,renter)=>{
    // console.log("rent res", itemId);
    // setIsRented(!isRented);
    props.rentingState(itemId, renter);
    console.log("action rent id:" + props.rentedId);
    console.log("item rent id:"+ itemId);
    console.log("is reted bool: " + props.isRented);
    //putting another initial state inside reducer called isRented
    //having a for loop inside item.map in order to see if any items are rented (inside of renter and owner)
    //change color of button if rented
  }

    
    return(

      <Grid container className={classes.root} spacing={2}>
        <h1>{props.username}</h1>
        <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}> 
          {itemData.map(res=>{
            if((res.tech_item_id===props.rentedId)&&props.isRented===true)
            {
              return (
                <Box className={classes.box}>
                    <h1>{res.tech_item_title}</h1>
                    <p>{res.tech_item_price}</p>
                    <button onClick={()=>{rent(res.tech_item_id, props.renterId)}} style={{backgroundColor:"#6c8abd"}}>Rented</button>
                    <p>{res.tech_item_description}</p>
                </Box>
              )
            }
            else
            {
              return (
                <Box className={classes.box}>
                    <h1>{res.tech_item_title}</h1>
                    <p>{res.tech_item_price}</p>
                    <button onClick={()=>{rent(res.tech_item_id)}}>Rent</button>
                    <p>{res.tech_item_description}</p>
                </Box>
              )
            }
          })}
        </Grid>
      </Grid>
    )

}

const mapStateToProps = state =>{
  // console.log("renter state: " + state.username);
  return({
      username:state.username,
      userId:state.userId,
      isRented:state.isRented,
      rentedId:state.rentedId
  })
}

export default connect(mapStateToProps, {rentingState})(Renter);
