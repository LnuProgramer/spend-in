import React from "react";
import "./ElipcesStyle.scss";

function Elipces() {
  return (
    <>
      {" "}
      <div
        className="elipce-with-border"
        id="elipce-with-border-top-right"
      ></div>
      <div
        className="elipce-with-border"
        id="elipce-with-border-bottom-left"
      ></div>
      <div
        className="elipce-without-border"
        id="elipce-withot-border-top-left"
      ></div>
      <div
        className="elipce-without-border"
        id="elipce-withot-border-bottom-right"
      ></div>
    </>
  );
}

export default Elipces;
