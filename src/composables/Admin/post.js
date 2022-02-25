import axios from "axios";
export async function post(link, data) {
  try {
    await axios.post(link, data);
  } catch (err) {
    console.log(err.message);
  }
}
