import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCleaningServices } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import ButtonComponent from "../../components/Button/ButtonComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import InputComponent from "../../components/Input/InputComponent";
import PaymentHistroy from "../../components/PaymentHistroy/PaymentHistroy";
import "./customerMaster.css";

const CustomerMaster = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [address, setAddress] = useState("");
  const [openPayemntHistroy, setOpenPaymentHistroy] = useState(false);

  const handleSave = () => {
    console.log("Save clicked!");
    const existingData = JSON.parse(localStorage.getItem("customers")) || [];
    const newCustomer = {
      name,
      email,
      phoneNumber,
      address,
    };
    const updatedData = [...existingData, newCustomer];
    localStorage.setItem("customers", JSON.stringify(updatedData));
    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  
    console.log("Customer data saved!", updatedData);
  };

  const handleDelete = () => {
    console.log("Delete clicked!");
  };

  const handleClear = () => {
    console.log("Clear clicked!");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  const handleClose = () => {
    console.log("Close clicked");
  };

  return (
    <>
      <div className="d-block w-100" style={{ paddingLeft: "125px" }}>
        <HeaderComponent headerText="CUSTOMER MASTER" />
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
              <ButtonComponent
                buttonName="Payment Histroy"
                buttonIcon={<FaSave />}
                onClickEvent={() => setOpenPaymentHistroy(true)}
              />
              <ButtonComponent
                buttonName="Save"
                buttonIcon={<FaSave />}
                onClickEvent={handleSave}
              />
              <ButtonComponent
                buttonName="Delete"
                buttonIcon={<RiDeleteBin6Fill />}
                onClickEvent={handleDelete}
              />
              <ButtonComponent
                buttonName="Clear"
                buttonIcon={<MdOutlineCleaningServices />}
                onClickEvent={handleClear}
              />
              <ButtonComponent
                buttonName="Close"
                buttonIcon={<IoMdClose />}
                onClickEvent={handleClose}
                marginRight="34px"
              />
            </div>
          </div>
        </div>
        {openPayemntHistroy && (
          <PaymentHistroy
            show={openPayemntHistroy}
            onSet={setOpenPaymentHistroy}
            totalPayment={0}
          />
        )}
      </div>
    </>
  );
};

export default CustomerMaster;
