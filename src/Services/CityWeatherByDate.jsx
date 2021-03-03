import axios from "axios";
import CityWeatherByDateMock from "./CityWeatherByDateMock"
const API_KEY = "a1824534b939ecb009b270e41a657952"

// Service Handler and State Setter
export default async function getCityWeatherDataList(id, setData, useMock) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`;
    const mockResponse = CityWeatherByDateMock
    try {
        console.log('%c GET REQUEST FOR FORECAST ENDPOINT" ', 'background: #222; color: #bada55')
        const response = useMock ? await mockResponse : await axios.get(url, { crossdomain: true });
        setData(response.data)
    } catch (error) {
        console.error(error);
    }
}