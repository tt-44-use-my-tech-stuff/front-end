import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import {
    Box,
    Grid
  } from "@material-ui/core";
import userStyles from "../styles/UserStyles";
// import {ownerData} from "../action";
import { connect } from "react-redux";
import {loadItemData, deleteItem, rentingState}from"../action";
import {useHistory} from"react-router";

const Owner =(props)=>{
    const classes = userStyles();
    const [itemData, setItemData]=useState([]);
  
    //getting data
    const {push} = useHistory();

    //THE ITEMS
    useEffect(()=>
    {
        axiosWithAuth()
        .get('/api/tech_items') //API ITEM/data FROM UNIT 4
        .then(res =>
        {
            //console.log(res.data);
            setItemData(res.data);
        })
        .catch(err => console.log(err))
        
    },[]);

    //syncing owner rented product with renter product
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    // console.log(props);
    const rent = (itemId)=>{
        props.rentingState(itemId);
    }


    return(
        <Grid container className={classes.root} spacing={2}>
            <h1>{props.username}</h1> 
            <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}>    
                
                {itemData.map(res => {
                    if(props.userId===res.owner_id){
                        if((res.tech_item_id===props.rentedId)&&props.isRented===true)
                        {
                            return (
                                <Box  key={res.tech_item_id}  className={classes.box}>
                                    <h1>{res.tech_item_title}</h1>
                                    <p>{res.tech_item_price}</p>
                                    <p>{res.tech_item_description}</p>
                                    <button onClick={()=> {
                                        push('./Edit');
                                        props.loadItemData(res.tech_item_id);
                                    }}>Edit Item</button>
                                    <button>Can't delete rented item</button>
                                    <button onClick={()=>{rent(res.tech_item_id)}} style={{backgroundColor:"#6c8abd"}}>Rented</button>
                                </Box>
                            )
                        }
                        else
                        {
                            return (
                                <Box key={res.tech_item_id} className={classes.box}>
                                    <h1>{res.tech_item_title}</h1>
                                    <p>{res.tech_item_price}</p>
                                    <p>{res.tech_item_description}</p>
                                    <button onClick={()=> {
                                        props.loadItemData(res.tech_item_id);
                                        push('/Edit');
                                    }}>Edit Item</button>
                                    <button onClick={()=> props.deleteItem(res.tech_item_id, res.owner_id)}>Delete Item</button>
                                </Box>
                            )
                        }
                 }else {
                     return(
                     console.log("else"))
                 }
            })}
            </Grid>
        </Grid>
    )

}

const mapStateToProps = state =>{
    // console.log("owner state: " + state.username);
    return({
        username:state.username,
        userId:state.userId,
        isRented:state.isRented,
        rentedId:state.rentedId
    })
}

export default connect(mapStateToProps, {deleteItem,loadItemData,rentingState})(Owner);