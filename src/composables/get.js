import axios from "axios";
export async function get(link) {
  try {
    const response = await axios.get(link);
    return response
  } catch (err) {
    console.log(err.message);
  }
}