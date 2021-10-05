import React,{ useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  function handleOnClick() {
   
  }
  return <button onClick={isOn ? "ON" : "OFF"}>OFF</button>;
}

export default Toggle;
