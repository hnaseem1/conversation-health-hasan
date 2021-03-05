import React from "react";
import CityListDropDown from "./Components/WeatherForcast-Components/CityListDropdown";
import CityForcastDetail from "./Components/WeatherForcast-Components/CityForcastDetail";
import "./styles.css";
import ForcastTableWithToggle from "./Components/WeatherForcast-Components/ForcastTableToggle";
import getDetails from "./Services/CityForecast";
import getCityWeatherDataList from "./Services/CityWeatherByDate"

export default function App() {
  const[weatherData, setWeatherData] = React.useState();
  const[forecastData, setForecastData] = React.useState();
  const [id, setId] = React.useState(1);

  React.useEffect(() => {
    if(id !== 1) {
      getDetails(id, setWeatherData);
      getCityWeatherDataList(id, setForecastData);
    } else {
      setWeatherData(undefined);
      setForecastData(undefined);
    }
  }, [id]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <CityListDropDown setId={setId}/>
      <CityForcastDetail data={weatherData}/>
      <ForcastTableWithToggle data={forecastData}/>
    </div>
  );
}
