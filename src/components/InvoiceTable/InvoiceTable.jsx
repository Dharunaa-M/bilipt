import React from "react";
import "./invoiceTable.css";

const InvoiceTable = ({ invoiceData }) => {

  const discount = 20;

  // Calculate subtotal
  const subtotal = invoiceData.reduce((acc, data) => acc + Number(data.rate) * 2, 0);

  const tax = Math.round(invoiceData.reduce((acc, data) => acc + (Number(data.rate) * 2 * Number(data.gst)) / 100, 0));

  const total = Math.round(subtotal - discount + tax);

  localStorage.setItem("totalAmount", total)


  return (
    <>
      <div className="invoice-heading">
      <select className="p-2 mb-2 rounded-3" style={{background: "#d4d6c9", fontFamily: "Poppins, sans-serif", fontWeight: "600", fontSize: "20px"}}>
        <option value="">Select customer</option>
        <option value="cash">Dharunaa</option>
        <option value="card">Keerthana</option>
        <option value="upi">Venmathi</option>
      </select>
        <div
          className="d-flex justify-content-between align-items-center flex-row"
          style={{ gap: "200px" }}
        >
          <p>Price</p>
          <p>Quantity</p>
          <p>Amount</p>
        </div>
      </div>
      {
        invoiceData.length > 0 ? (
          invoiceData.map((data) => (
              <div className="invoice-table-data">
                <div className="invoice-data">
                  <p style={{width: "fit-content"}}>{data.name}</p>
                  <div
                    className="d-flex justify-content-between align-items-center flex-row"
                    style={{ gap: "250px" }}
                  >
                    <p>{data.rate}</p>
                    <p>2</p>
                    <p style={{fontWeight:"600"}}>{Number(data.rate) * 2}</p>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center py-4">No products available</td>
          </tr>
        )}
        <div className="d-flex flex-row-reverse align-items-center mt-5">
          <div className="d-flex flex-column" style={{marginRight: "110px"}}>
            <div className="d-flex flex-row justify-content-between mt-2" style={{gap:"180px"}}>
              <p className="total"> Subtotal</p >
              <span className="total-price">{subtotal}</span>
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
