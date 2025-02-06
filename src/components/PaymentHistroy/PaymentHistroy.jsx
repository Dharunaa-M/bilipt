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
          </Modal.Body>
        </Modal>
    </>
  )
}

export default PaymentHistroy