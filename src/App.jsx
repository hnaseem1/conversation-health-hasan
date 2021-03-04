import React from "react";
import CityListDropDown from "./Components/WeatherForcast-Components/CityListDropdown";
import CityForcastDetail from "./Components/WeatherForcast-Components/CityForcastDetail";
import "./styles.css";
import ForcastTableWithToggle from "./Components/WeatherForcast-Components/ForcastTableToggle";
import getDetails from "./Services/CityForecast";
import getCityWeatherDataList from "./Services/CityWeatherByDate"

const cityList = [
  {
    id: 6167865,
    name: "Toronto",
    country: "CA"
  },
  {
    id: 6094817,
    name: "Ottawa",
    country: "CA"
  },
  {
    id: 1850147,
    name: "Tokyo",
    country: "JP"
  }
];

export default function App() {
  const[weatherData, setWeatherData] = React.useState();
  const[forecastData, setForecastData] = React.useState();
  const [id, setId] = React.useState(cityList[0].id);
  const useMockService = true

  React.useEffect(() => {
    getDetails(id, setWeatherData, useMockService);
    getCityWeatherDataList(id, setForecastData, useMockService)
  }, [id]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <CityListDropDown data={cityList} setId={setId}/>
      <CityForcastDetail data={weatherData}/>
      <ForcastTableWithToggle data={forecastData}/>
    </div>
  );
}
