import axios from "axios"
const URL = "http://localhost:2005/api/"
export const lsitUsers = async () =>{
    try {
        const response = await axios.get(`${URL}list-users`);
        return response.data.usuarios;
    } catch (e) {
        throw new Error(e);
    }
}