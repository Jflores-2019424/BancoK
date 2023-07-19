import axios from "axios"
import Swal from "sweetalert2";
const URL = "http://localhost:2005/api/"
export const deleteUser = async (id) =>{
    try {
        const response = await axios.delete(`${URL}delete-user/${id}`);
        return response.data;
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: "Error",
            text: "no se puede borrar este evento",
            confirmButtonText: "Ok"
            });
    }
}