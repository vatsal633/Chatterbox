const BASEURL = import.meta.env.VITE_BACKEND_URL
import axios from "axios"

export const signinUser = async (formData) => {

    try {
        const response = await axios.post(`${BASEURL}/api/auth/signin`, formData, {
            headers: { "Content-Type": "application/json" },
        })

        return response.data

    } catch (err) {
        if (err.response && err.response.status === 400) {
            throw new Error(err.response.data.message);
        } else {
            throw new Error('Something went wrong while signing in.');
        }
    }
}

export const loginUser = async (formData) => {
    try{
        const response = await axios.post(`${BASEURL}/api/auth/login`,formData,{
            headers: { "Content-Type": "application/json" },
        })
        
        return response.data
    }
    catch(err){
         if (err.response && err.response.status === 404) {
            throw new Error(err.response.data.message);
        } else if(err.response && err.response.status === 401){
            throw new Error(err.response.data.message);
        }
        else{
            throw new Error('Something went wrong while log in.');
        }
    }
} 