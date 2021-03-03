import React from "react";
import Box from "@material-ui/core/Box";

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
      <Box
        component="span"
        display="block"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        {data?.main.temp} K
        <br />
        Wind {data?.wind.speed} m/sec
      </Box>
    </div>
  );
}
