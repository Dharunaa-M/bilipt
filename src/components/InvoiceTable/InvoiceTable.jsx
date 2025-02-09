import React from "react";
import "./invoiceTable.css";

const InvoiceTable = ({ invoiceData, subTotal, discount, tax, total }) => {
  return (
    <>
      <div className="invoice-heading">
        <p>Name</p>
        <div
          className="d-flex justify-content-between align-items-center flex-row"
          style={{ gap: "200px" }}
        >
          <p>Price</p>
          <p>Quantity</p>
          <p>Amount</p>
        </div>
      </div>
      {Array(3)
        .fill("")
        .map((_) => (
          <div className="invoice-table-data">
            <div className="invoice-data">
              <p>item1</p>
              <div
                className="d-flex justify-content-between align-items-center flex-row"
                style={{ gap: "250px" }}
              >
                <p>100</p>
                <p>2</p>
                <p style={{fontWeight:"600"}}>200</p>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex flex-row-reverse align-items-center mt-5">
          <div className="d-flex flex-column" style={{marginRight: "110px"}}>
            <div className="d-flex flex-row justify-content-between mt-2" style={{gap:"180px"}}>
              <p className="total"> Subtotal</p >
              <span className="total-price">{subTotal}</span>
            </div>
            <div className="d-flex flex-row justify-content-between mt-2" style={{gap:"180px"}}>
              <p className="total"> Discount</p>
              <span className="total-price">{discount}</span>
            </div>
            <div className="d-flex flex-row justify-content-between mt-2" style={{gap:"180px"}}>
              <p className="total"> Tax</p>
              <span className="total-price">{tax}</span>
            </div>
            <div className="d-flex flex-row justify-content-between mt-2" style={{gap:"180px"}}>
              <p className="total" style={{fontWeight: "600"}}> Total</p>
              <span className="total-price">{total}</span>
            </div>
          </div>
        </div>
    </>
  );
};

export default InvoiceTable;
