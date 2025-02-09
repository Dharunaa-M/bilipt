import React from "react";
import Assets from "../../assets/assets";
import HeaderComponent from "../../components/Header/HeaderComponent";
import InvoiceTable from "../../components/InvoiceTable/InvoiceTable";
import "./invoice.css";

const Invoice = () => {
  return (
    <>
      <div className='"d-block w-100' style={{ paddingLeft: "125px" }}>
        <HeaderComponent headerText="SALES INVOICE" />
        <div className="sales-container">
          <div className="date-section">Date: dd/mm/yy</div>
          <div className="invoice-container-new">
            <div className="d-flex flex-row gap-5 align-items-center">
              <img src={Assets.Logo} alt="" />
              <p>Sales Invoice</p>
            </div>
            <div className="d-flex flex-column gap-2 justify-content-start align-items-start pe-5">
              <div className="d-flex flex-row gap-1 align-items-center">
                <p>Invoice No:</p>
                <span>12</span>
              </div>
              <div className="d-flex flex-row gap-1 align-items-center">
                <p>Payment Terms:</p>
                <select>
                  <option value="">Select type</option>
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                </select>
              </div>
            </div>
          </div>
          <div className="invoice-table">
            <h6>Dharun Dayaal</h6>
            <InvoiceTable subTotal={600} discount={60} tax={20} total={620} />
            <div className="thank-you">...Thank You...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
