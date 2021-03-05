import React from "react";
import Box from "@material-ui/core/Box";
import { convertKelvinToCelcius, windConverter } from "../../Helpers/GlobalHelpers"

export default function CityForcastDetail(props) {
  const data = props.data;

  return (
    <div style={{ width: "100%" }}>
      <Box
        component="span"
        display="block"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        {data?.weather[0].main}
        <br />
        {data?.weather[0].description}
      </Box>
      {(data) ? <Box
        component="span"
        display="block"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        {convertKelvinToCelcius(data?.main.temp)}
        <br />
        Wind {windConverter(data?.wind.speed)}
      </Box> : <Box></Box>}
    </div>
  );
}
