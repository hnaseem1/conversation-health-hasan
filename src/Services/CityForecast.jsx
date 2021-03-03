import axios from "axios";

export default async function getDetails(id, setData) {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=538882fc8387290c6cee83f313a6acf5`;
  try {
    const response = await axios.get(url, { crossdomain: true });
    setData(response.data)
  } catch (error) {
    console.error(error);
  }
}