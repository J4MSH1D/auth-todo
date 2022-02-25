import axios from "axios"
export async function post(data) {
    try {
        await axios.post("todos", data)
    } catch (err) {
        console.log(err.message);
    }
}