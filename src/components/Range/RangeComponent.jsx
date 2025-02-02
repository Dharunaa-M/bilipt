import React from "react";

const RangeComponent = ({
  heading,
  icon1,
  icon2,
  price,
  plus,
  percent,
  classname1,
  classname2,
}) => {
  return (
    <div className={classname1}>
      <div className="d-flex flex-column gap-1 justify-content-between">
        <div className={classname2}>
          <h3>{heading}</h3>
          {icon1}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p
            className="m-0"
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "0.56",
            }}
          >
            &#8377;{price}
          </p>
          {icon2}
          <div className="d-flex flex-column gap-1">
            <p
              className="m-0"
              style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                fontWeight: "500",
                lineHeight: "1",
                color: "rgba(0, 0, 0, 0.4)",
              }}
            >
              +{plus}
            </p>
            <p
              className="m-0"
              style={{
                fontFamily: "Poppins",
                fontSize: "10px",
                fontWeight: "500",
                lineHeight: "1",
                color: "rgba(0, 0, 0, 0.4)",
              }}
            >
              +{percent}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeComponent;
