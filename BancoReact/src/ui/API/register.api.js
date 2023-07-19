import axios from "axios";

const URL = "http://localhost:2005/api/"

export const createUser = async (name, lastname, DPI, direction, cellphone, email, password, ingresosMen ) =>{
    try{
        const user = {name, lastname, DPI, direction, cellphone, email, password,ingresosMen }
        const response = await axios.post(`${URL}create-user`, user)
        return response.data

    }catch(e){
        
    }

}
