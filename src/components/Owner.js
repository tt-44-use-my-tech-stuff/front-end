import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
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


const Owner =()=>{
    const classes = userStyles();
    const [itemData, setItemData]=useState([]);
    const [ownerData, setOwnerData] = useState([]);
    //getting data


    //THE OWNER
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/tech_items')
        .then(res =>{
            setOwnerData(res.data);
        })
    })

    //THE ITEMS
    useEffect(()=>{
        axiosWithAuth()
        .get(`https://techstufflambda.herokuapp.com/api/techitems/`) //API ITEM/data FROM UNIT 4
        .then(res =>{
            //console.log(res.data);
            setItemData(res.data);
        })
        .catch(err => console.log(err))
        
    }, []);


    //THINGS WE NEED TO WORK ON
    //del button deletes item from the array object
    //edit takes us to unit 2 edit form
    //aesthetic
    return(
        <Grid container className={classes.root} spacing={2}>
            {/* <h1>{ownerData.username}</h1>  */}
            <Grid container className={classes.bigbox} spacing={2} style={{color:"#4f4f4f", marginLeft:"25%"}}>    
                {itemData.map(res => {
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

export default Owner