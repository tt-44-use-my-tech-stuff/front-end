import axios from'axios';

export const axiosWithAuth = () =>{
    
    return axios.create(
        {
            headers:{
              Authorization: JSON.parse(window.localStorage.getItem('token')),
            },
            baseURL: "https://techstufflambda.herokuapp.com",
          }
          
    )
}

