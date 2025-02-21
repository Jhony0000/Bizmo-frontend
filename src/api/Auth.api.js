import axios from "axios";
import { api_url } from "./common.api";


const sginUpWithGoogle = async (email, name, picture, sub) => {

  try {
    const response = await axios.post(`${api_url}/sginUpWithGoogle`, { email, name, picture, sub });
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    return response.data.user;
  } catch (error) {
    console.log("Google auth error:", error);
    return null;
  }
};

const getCurrentUser = async() => {
  try {
    const token = localStorage.getItem("access_token");
    if(!token){
      return null;
    }
    const response = await axios.get(`${api_url}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data;
  } catch (error) {
    
  }
}
export { sginUpWithGoogle,getCurrentUser };
