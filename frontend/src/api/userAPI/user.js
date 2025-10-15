import axios from 'axios'
import { backendURL } from '../../App'

// distructure user data and return and call backend

export const userRegister = async(name , email , password)=>{
let { data } = await axios.post(`${backendURL}/api/auth/register`,
     {name , email, password},
    {
        headers:{
            "Content-Type": 'application/json',
        }
    });
return data;
}

export const loginUser = async(email, password) => {
 let { data } = await axios.post(`${backendURL}/api/auth/login`, {email ,password},
    {
        headers:{
            "Content-Type": 'application/json',
        }
    }
 )
 return data;
}