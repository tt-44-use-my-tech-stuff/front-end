import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from"axios";

const Renter =()=>{

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
        })
        .catch(err => console.log(err))
        
    }, [renter])

    // const itemMap = (ownerData) => {
      
    // }
    return(
        <div className="container">
            {renter.map(res =>{
                return <p>{res.username}</p>
            })}
            {itemData.map(res =>{
                return (
                    <div className="items">
                    <h1>{res.tech_item_title}</h1>
                    <p>{res.tech_item_price}</p>
                    <p>{res.tech_item_description}</p>
                    </div>
                )
            })}
            
       
        </div>
    )

}

export default Renter;