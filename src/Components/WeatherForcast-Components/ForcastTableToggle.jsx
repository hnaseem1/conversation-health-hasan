import ForcastTable from "./ForcastTable.jsx";
import React from "react";
import ForcastButton from "./ForcastButton.jsx";
export default function ForcastTableWithToggle() {
  const [toggle, setToggle] = React.useState(false);

  const ForcastTableElements = () => {
    return (
      <div>
        <ForcastButton text="Close" setToggle={setToggle} toggle={toggle} />
        <ForcastTable />
      </div>
    );
  };

  return toggle ? (
    <ForcastTableElements />
  ) : (
    <ForcastButton text="See Forcast" setToggle={setToggle} toggle={toggle} />
  );
}
