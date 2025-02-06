import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import InputComponent from "../../components/Input/InputComponent";
import PaymentHistroy from "../../components/PaymentHistroy/PaymentHistroy";
import "./customerMaster.css";

const CustomerMaster = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState("");
  const [openPayemntHistroy, setOpenPaymentHistroy] = useState(false);

  return (
    <>
      <div className="d-block w-100">
        <h2 className="customer-heading">CUSTOMER MASTER</h2>
        <div className="customer-container">
          <InputComponent
            labelVal="Name"
            isRequired={true}
            width="649px"
            placeholder="Please enter the name of the  customer"
            onChange={setName}
            value={name}
          />
          <InputComponent
            labelVal="Email Address"
            width="649px"
            placeholder="Please enter the email address"
            onChange={setEmail}
            value={email}
          />
          <InputComponent
            labelVal="Phone Number"
            isRequired={true}
            width="649px"
            placeholder="Please enter the phone number"
            onChange={setPhoneNumber}
            value={phoneNumber}
          />
          <InputComponent
            labelVal="Address"
            width="649px"
            placeholder="Please enter area / town"
            onChange={setAddress}
            value={address}
          />
          <div className="mt-3">
            <div className="d-flex flex-row gap-4 justify-content-end">
              <div className="frame" onClick={() => setOpenPaymentHistroy(true)} >
                <span>Payment Histroy</span> <FaSave />
              </div>
              <div className="frame">
                <span>Save</span> <FaSave />
              </div>
              <div className="frame">
                <span>Delete</span> <RiDeleteBin6Fill />
              </div>
              <div className="frame">
                <span>Clear</span> <MdOutlineCleaningServices />
              </div>
              <div className="me-4 frame">
                <span>Close</span> <IoMdClose />
              </div>
            </div>
          </div>
        </div>
        {openPayemntHistroy && (
          <PaymentHistroy 
            show={openPayemntHistroy}
            onSet={setOpenPaymentHistroy}
          />
        )}
      </div>
    </>
  );
};

export default CustomerMaster;
