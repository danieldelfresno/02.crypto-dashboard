import React from "react";
import spinner from "./assets/Spinner-1s-200px.png";

function Spinner() {
  return (
    <div className="spinner-wrapper">
      <img src={spinner} className="spinner-img" alt="Loading..." />
    </div>
  );
}
export default Spinner;
