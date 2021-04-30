import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";
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
// import {ownerData} from "../action";
import { connect } from "react-redux";
import {loadItemData, deleteItem}from"../action";
import {useHistory} from"react-router";

const Owner =(state)=>{
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
        
    },
    );




    //THINGS WE NEED TO WORK ON
    //del button and edit (modify state)
    //edit takes us to unit 2 edit form
    //aesthetic
    return(
        <Grid container className={classes.root} spacing={2}>
            <h1>{state.username}</h1> 
            <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}>    
                
                {itemData.map(res => {
                    // console.log("owner res => " + res.owner_id);
                    if(state.userId===res.owner_id){
                        // console.log("yay we have an item!")
                        return (
                            <Box className={classes.box}>
                                <h1>{res.tech_item_title}</h1>
                                <p>{res.tech_item_price}</p>
                                <p>{res.tech_item_description}</p>
                                <button onClick={()=> {
                                    push('./Edit');
                                    state.loadItemData(res.tech_item_id);
                                }}>Edit Item</button>
                                <button onClick={()=> state.deleteItem(res.tech_item_id, res.owner_id)}>Delete Item</button>
                            </Box>
                        )
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
        userId:state.userId
    })
}

export default connect(mapStateToProps, {deleteItem,loadItemData})(Owner);