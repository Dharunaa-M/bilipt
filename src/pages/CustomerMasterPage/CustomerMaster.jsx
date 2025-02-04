import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import "./customerMaster.css";

const CustomerMaster = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState("");


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
        </div>
      </div>
    </>
  );
};

export default CustomerMaster;
