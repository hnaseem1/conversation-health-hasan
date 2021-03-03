import ForcastTable from "./ForcastTable.jsx";
import React from "react";
import ForcastButton from "./ForcastButton.jsx";
export default function ForcastTableWithToggle(props) {
  const [toggle, setToggle] = React.useState(false);
  const id = props.id

  const ForcastTableElements = () => {
    return (
      <div>
        <ForcastButton text="Close" setToggle={setToggle} toggle={toggle} />
        <ForcastTable id={id}/>
      </div>
    );
  };

  return toggle ? (
    <ForcastTableElements />
  ) : (
    <ForcastButton text="See Forcast" setToggle={setToggle} toggle={toggle} />
  );
}
