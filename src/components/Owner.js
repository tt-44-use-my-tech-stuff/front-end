import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Owner =()=>{

    const [itemData, setItemData]=useState([]);
    const [ownerData, setOwnerData] = useState([]);
    //getting data


    //THE OWNER
    useEffect(()=>{
        axiosWithAuth()
        .get('https://techstufflambda.herokuapp.com/api/users')
        .then(res =>{
            // console.log(res.data);
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
        <div className="container">
            <h1>{ownerData.username}</h1> 

            {itemData.map(res => {
                return (
                    <div className="ownerItems">
                    <h1>{res.tech_item_title}</h1>
                    <p>{res.tech_item_price}</p>
                    <p>{res.tech_item_description}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default Owner