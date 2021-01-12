import React, { useState } from "react";






function Toggle() {
  const [buttonToggleText, setToggleText ] = useState(false);

  function handleToggle() {
    setToggleText(buttonToggleText => !buttonToggleText)
    
    
  }
  const color = buttonToggleText ? "red" : "white"
  return <button onClick={handleToggle} style={{background: color}}>{buttonToggleText ? 'ON' : 'OFF'}</button>;
}

export default Toggle;
