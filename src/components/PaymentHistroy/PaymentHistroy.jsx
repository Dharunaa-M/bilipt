import React from 'react'
import { Modal } from 'react-bootstrap'
import "./paymentHistroy.css"
import { FaBusinessTime } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

const PaymentHistroy = ({ show, onSet, totalPayment }) => {
  return (
    <>
        <Modal show={show} size='md' centered>
          <Modal.Body className="payment-container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center">
                <h3>Payment History</h3>
                <FaBusinessTime />
              </div>
              <MdClose onClick={() => onSet(false)} />
            </div>
            <div className="mt-3">
              <table className="table text-center">
                <thead className="head-row">
                  <tr>
                    <th>Bill no</th>
                    <th>Customer name</th>
                    <th>Paid</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Array(5).fill("").map((_) => (
                      <tr>
                        <td className="data">123</td>
                        <td className="data">Dharun</td>
                        <td className="data">2000</td>
                        <td className="data">60000</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
                <div className="my-5 d-flex justify-content-start gap-2 align-content-center">
                  <p className="payment-out">Total Payment Outstanding:</p>
                  <div className="tot-payment">&#8377;{totalPayment}</div>
                </div>
            </div>
          </Modal.Body>
        </Modal>
    </>
  )
}

export default PaymentHistroy