import React from "react";
import "./buttonComponent.css";

const ButtonComponent = ({
  buttonName,
  buttonIcon,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  onClickEvent,
}) => {
  return (
    <div
      className="frame"
      style={{
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
      }}
      onClick={onClickEvent}
    >
      <span>{buttonName}</span> {buttonIcon}
    </div>
  );
};

export default ButtonComponent;
