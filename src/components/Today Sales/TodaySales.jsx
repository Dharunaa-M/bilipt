import React from "react";
import "../../pages/DashboardPage/dashboard.css";

const TodaySales = ({
  slaesPrice,
  creditMoney,
  debitMoney,
  invoiceMoney,
  salesMoney,
  totCustomers,
  totSuppliers,
}) => {

    const headerStyle = {
        fontSize: "10px",
        fontFamily: "Poppins",
        fontWeight: "600",
        lineHeight: 1
    }

    const paraStyle = {
        fontSize: "10px",
        fontFamily: "Poppins",
        fontWeight: "500",
        lineHeight: 1.4,
        color: "#998e8e"
    }

  return (
    <div className="today-sales">
      <div className="today-sales-heading">
        <h4>TODAY SALES</h4>
        <p>&#8377;{slaesPrice}</p>
      </div>
      <div className="d-flex flex-column justify-content-between gap-4 mt-5">
        <div className="d-flex justify-content-between flex-row gap-1">
          <div className="d-flex flex-column gap-1 justify-content-lg-start text-start">
            <h5 style={headerStyle}>Credit</h5>
            <p style={paraStyle}>&#8377;{creditMoney}</p>
          </div>
          <div className="d-flex flex-column gap-1 justify-content-lg-end text-end">
            <h5 style={headerStyle}>Debit</h5>
            <p style={paraStyle}>&#8377;{debitMoney}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-row">
          <div className="d-flex flex-column gap-1 justify-content-lg-start text-start">
            <h5 style={headerStyle}>Purchase Invoice</h5>
            <p style={paraStyle}>{invoiceMoney}</p>
          </div>
          <div className="d-flex flex-column gap-1 justify-content-lg-end text-end">
            <h5 style={headerStyle}>Sales Invoice</h5>
            <p style={paraStyle}>{salesMoney}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-row">
          <div className="d-flex flex-column gap-1 justify-content-lg-start text-start">
            <h5 style={headerStyle}>Total Customers</h5>
            <p style={paraStyle}>{totCustomers}</p>
          </div>
          <div className="d-flex flex-column gap-1 justify-content-lg-end text-end">
            <h5 style={headerStyle}>Total Suppliers</h5>
            <p style={paraStyle}>{totSuppliers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;
