import axios from "axios";
export async function post(link, data) {
  try {
    const response = await axios.post(link, data);
    return response
  } catch (err) {
    console.log(err.message);
  }
}
