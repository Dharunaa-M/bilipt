import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import ButtonComponent from "../../components/Button/ButtonComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import InputComponent from "../../components/Input/InputComponent";
import ProductMasterTable from "../../components/ProductMasterTable/ProductMasterTable";
import "./productMaster.css";

const ProductMaster = () => {
  const [showProductMasterTable, setShowProductMasterTable] = useState(false);

  const handleView = () => {
    setShowProductMasterTable(true);
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
      <div className="d-block w-100" style={{ paddingLeft: "125px" }}>
        <HeaderComponent headerText="PRODUCT MASTER" />
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
                <ButtonComponent
                  buttonName="View"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleView}
                />
                <ButtonComponent
                  buttonName="View"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleSave}
                />
                <ButtonComponent
                  buttonName="View"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleClear}
                />
                <ButtonComponent
                  buttonName="View"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <ProductMasterTable
          show={showProductMasterTable}
          onSet={setShowProductMasterTable}
        />
      }
    </>
  );
};

export default ProductMaster;
