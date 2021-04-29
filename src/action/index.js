import axios from"axios";
import {useHistory} from "react-router-dom";

export const LOAD_OWNER_DATA = "LOAD_OWNER_DATA";
export const LOAD_RENTER_DATA = "LOAD_RENTER_DATA";
export const LOAD_ITEM_DATA = "LOAD_ITEM_DATA";
export const LOGIN = "LOGIN";

const {push} = useHistory();


export const loginNow = (values)=>{
    return(dispatch) => {
        dispatch({type:LOGIN});
        axios
        .post('https://use-my-tech-stuff-backend-1.herokuapp.com/api/auth/login', values)
        .then(res =>{
          localStorage.setItem('token', JSON.stringify(res.data.token));
          console.log(res)
          push('/owner')
        })
        .catch(err => console.log(err.response.message))
    }
}
