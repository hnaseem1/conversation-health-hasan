import axios from "axios";
import CityForecastMock from "./CityForecastMock"
const API_KEY = "a1824534b939ecb009b270e41a657952"

// Service Handler and State Setter
export default async function getDetails(id, setData, useMock=false) {
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}`;
  try {
    console.log('%c GET REQUEST FOR WEATHER ENDPOINT" ', 'background: #222; color: #bada55')
    const response = useMock ? await CityForecastMock : await axios.get(url, { crossdomain: true });
    setData(response.data)
  } catch (error) {
    console.error(error);
  }
}