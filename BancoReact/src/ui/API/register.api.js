import axios from "axios";

const URL = "http://localhost:2005/api/"

export const createUser = async (name, lastname, DPI, direction, cellphone, email, password) =>{
    try{
        const user = {name, lastname, DPI, direction, cellphone, email, password}
        const response = await axios.post(`${URL}create-user`, user)
        return response.data

    }catch(e){
        
    }

}