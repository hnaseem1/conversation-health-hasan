import axios from "axios";
const API_KEY = "a1824534b939ecb009b270e41a657952"

// Service Handler and State Setter
export default async function getCityWeatherDataList(id, setData) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`;
    try {
        console.log('%c GET REQUEST FOR FORECAST ENDPOINT" ', 'background: #222; color: #bada55')
        const response = await axios.get(url, { crossdomain: true });
        setData(response.data)
    } catch (error) {
        console.error(error);
    }
}