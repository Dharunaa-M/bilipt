import React from 'react'
import { Modal } from 'react-bootstrap'
import "./paymentHistroy.css"
import { FaBusinessTime } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

const PaymentHistroy = ({ show, onSet }) => {
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
              <table  className="table text-center">
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
                        <td>123</td>
                        <td>Dharun</td>
                        <td>2000</td>
                        <td>60000</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
                <div className="my-5 d-flex justify-content-start gap-2 align-content-center">
                  <p>Total Payment Outstanding:</p>
                  <div>&#8377;0</div>
                </div>
            </div>
          </Modal.Body>
        </Modal>
    </>
  )
}

export default PaymentHistroy