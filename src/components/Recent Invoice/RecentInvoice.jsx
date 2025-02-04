import React from "react";
import "../../pages/DashboardPage/dashboard.css"
import { TbMessageDollar } from "react-icons/tb";

const RecentInvoice = () => {
  return (
    <div className="recent-invoice">
      <div className="invoice-heading">
        <h3>RECENT INVOICES</h3>
        <TbMessageDollar style={{ color: "#ffd405" }} />
      </div>
      {Array(22)
        .fill("")
        .map((_, idx) => (
          <div className="invoice-section" key={idx}>
            <div className="industry">
              <h4 className="m-0">Industry A</h4>
              <p className="m-0">SALES INVOICE || &#8377;42,378.0</p>
            </div>
            <div className="date">
              <p>JAN 2025</p>
              <p>111</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecentInvoice;
