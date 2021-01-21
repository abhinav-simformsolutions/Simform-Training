import React from "react";
import "./button.css"

function Button(props) {
  return (
    <div className={`button ${props.imp == "sec" ? "button_white" : ""}`}>
        <a href="#">
            {props.text}
        </a>
    </div>
  );
}

export default Button;
