import axios from"axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
// import {useHistory} from "react-router-dom";

export const LOAD_ITEM_DATA = "LOAD_ITEM_DATA";
export const LOGIN = "LOGIN";
export const DELETE_ITEM="DELETE_ITEM";
export const CLEAR_STATE="CLEAR_STATE";

export const loginNow = (values)=>{
    return(dispatch) => {
        axios
        .post('https://use-my-tech-stuff-backend-1.herokuapp.com/api/auth/login', values)
        .then(res =>{
          localStorage.setItem('token', JSON.stringify(res.data.token));
          // console.log(res.data)
          dispatch({type:LOGIN, payload:res.data});
        })
        .catch(err => console.log(err.response))
    }
}

export const loadItemData = (item)=>{
  console.log(item)
  return(dispatch) =>{
    console.log("Inside dispatch");
    axiosWithAuth()
    .get(`https://use-my-tech-stuff-backend-1.herokuapp.com/api/tech_items/${item}`)
    .then(res =>{
      console.log("res data: ")
      console.log(res.data)
      dispatch({type:LOAD_ITEM_DATA, payload:res.data})
    })
    .catch(err => console.log(err))
  }
}
export const deleteItem = (item, owner) =>{
  return(dispatch)=>{
    console.log("deleting")
    console.log(item)
    console.log(owner)
    axiosWithAuth()
    .delete(`https://use-my-tech-stuff-backend-1.herokuapp.com/api/tech_items/${item}/owners/${owner}`)
    .then()
  }
}

export const clearState = () =>{
  return({type:CLEAR_STATE})
}