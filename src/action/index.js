import axios from"axios";


export const LOAD_OWNER_DATA = "LOAD_OWNER_DATA";
export const LOAD_RENTER_DATA = "LOAD_RENTER_DATA";
export const LOAD_ITEM_DATA = "LOAD_ITEM_DATA";
export const LOGIN = "LOGIN";



export const loginNow = (values)=>{
    console.log(values)
    return(dispatch) => {
        dispatch({type:LOGIN});
        axios
        .post('https://use-my-tech-stuff-backend-1.herokuapp.com/api/auth/login', values)
        .then(res =>{
          localStorage.setItem('token', JSON.stringify(res.data.token));
          console.log(res)
        })
        .catch(err => console.log(err.response.message))
    }
}
