import React from "react";
import Button from "../Button/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./item.css";

function Item(props) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${props.backgImg})`,
      }}
    >
      <div className="item--container">
        <div className="item--text">
          <p>{props.title}</p>
        
        <div className="item--subtext">
          <p>{props.desc}</p>
          </div>
        </div>
        <div className="item--lower">
          <div className="item--buttons">
            <Button imp="primary" text={props.leftBtnTxt} />
            {props.twoBtns && <Button imp="sec" text={props.rigtBtnTxt} />}
          </div>
          {props.first && (
            <div className="item--expand">
              <ExpandMoreIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
