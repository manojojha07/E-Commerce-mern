import axios from "axios";
import axiosInstance from "../components/axiosInstance"
import { backendURL } from "../App";



export const login_Admin = async(email, password ) => {
 let {data} = await axios.post(backendURL + "/api/auth/admin", {email,password});
 return data;
}