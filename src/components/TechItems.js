import React, {useEffect, useState} from"react"
import { axiosWithAuth } from "../helpers/axiosWithAuth"

const TechItems = ()=>{
const [data, setData] = useState([])
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/tech_items')
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err=>console.log(err.response))
    },[])
    

    return (
        <div>
            {data.map(res =>{
                return (
                    <div>
                        <h1>{res.tech_item_title}</h1>
                        <p>{res.tech_item_price}</p>
                        <p>{res.tech_item_description}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default TechItems;