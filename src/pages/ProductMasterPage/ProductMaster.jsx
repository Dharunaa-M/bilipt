import React from "react";
import { FaSave } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCleaningServices } from "react-icons/md";
import InputComponent from "../../components/Input/InputComponent";
import "./productMaster.css";

const ProductMaster = () => {
  const handleView = () => {
    console.log("View clicked!");
  };

  const handleSave = () => {
    console.log("Save clicked!");
  };

  const handleClear = () => {
    console.log("Clear clicked!");
  };

  const handleClose = () => {
    console.log("Close clicked");
  };

  return (
    <>
      <div className="d-block w-100">
        <h2 className="master-heading">PRODUCT MASTER</h2>
        <div>
          <div className="master-container">
            <div className="name">
              <InputComponent
                labelVal="Name"
                isRequired={true}
                placeholder="Please enter the name of the product"
              />
            </div>
            <div className="product-category">
              <InputComponent
                labelVal="Product Category"
                placeholder="Enter the product category"
              />
            </div>
            <div className="brand-name">
              <InputComponent
                labelVal="Brand Name"
                placeholder="Enter the brand name"
              />
            </div>
            <div className="product-id">
              <InputComponent
                labelVal="Product ID"
                placeholder="Enter the product ID"
              />
            </div>
            <div className="base-price">
              <InputComponent
                labelVal="Base Price"
                placeholder="Enter the base price of the product"
              />
            </div>
            <div className="sales-rate">
              <InputComponent
                labelVal="Sales Rate"
                placeholder="0.00"
                type="number"
              />
            </div>
            <div className="unit-name">
              <InputComponent labelVal="Unit Name" placeholder="Kg, nos" />
            </div>
            <div className="gst">
              <InputComponent labelVal="GST" placeholder="Select GST" />
            </div>
            <div className="mt-3 opt">
              <div className="d-flex flex-row gap-4 justify-content-end">
                <div className="frame" onClick={handleView}>
                  <span>View</span> <FaSave />
                </div>
                <div className="frame" onClick={handleSave}>
                  <span>Save</span> <FaSave />
                </div>
                <div className="frame" onClick={handleClear}>
                  <span>Clear</span> <MdOutlineCleaningServices />
                </div>
                <div className="me-4 frame" onClick={handleClose}>
                  <span>Close</span> <IoMdClose />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMaster;
