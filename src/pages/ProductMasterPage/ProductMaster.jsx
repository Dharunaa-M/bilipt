import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import ButtonComponent from "../../components/Button/ButtonComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";
import InputComponent from "../../components/Input/InputComponent";
import ProductMasterTable from "../../components/ProductMasterTable/ProductMasterTable";
import "./productMaster.css";

const ProductMaster = () => {
  const [showProductMasterTable, setShowProductMasterTable] = useState(false);
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [id, setId] = useState("")
  const [basePrice, setBasePrice] = useState("")
  const [rate, setRate] = useState("")
  const [unit, setUnit] = useState("")
  const [gst, setGst] = useState("")

  const handleView = () => {
    setShowProductMasterTable(true);
  };

  const handleSave = () => {
    console.log("Save clicked!");

    const existingData = JSON.parse(localStorage.getItem("productDetails")) || [];
    const newProduct = {
      name,
      category,
      brand,
      id,
      basePrice,
      rate,
      unit,
      gst
    }
    const updatedData = [...existingData, newProduct];
    localStorage.setItem("productDetails", JSON.stringify(updatedData))
    setName("")
    setCategory("")
    setBrand("")
    setId("")
    setBasePrice("")
    setRate("")
    setUnit("")
    setGst("")
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
                value={name}
                onChange={setName}
              />
            </div>
            <div className="product-category">
              <InputComponent
                labelVal="Product Category"
                placeholder="Enter the product category"
                value={category}
                onChange={setCategory}
              />
            </div>
            <div className="brand-name">
              <InputComponent
                labelVal="Brand Name"
                placeholder="Enter the brand name"
                value={brand}
                onChange={setBrand}
              />
            </div>
            <div className="product-id">
              <InputComponent
                labelVal="Product ID"
                placeholder="Enter the product ID"
                value={id}
                onChange={setId}
              />
            </div>
            <div className="base-price">
              <InputComponent
                labelVal="Base Price"
                placeholder="Enter the base price of the product"
                value={basePrice}
                onChange={setBasePrice}
              />
            </div>
            <div className="sales-rate">
              <InputComponent
                labelVal="Sales Rate"
                placeholder="0.00"
                type="number"
                value={rate}
                onChange={setRate}
              />
            </div>
            <div className="unit-name">
              <InputComponent 
                labelVal="Unit Name" 
                placeholder="Kg, nos" 
                value={unit}
                onChange={setUnit}
              />
            </div>
            <div className="gst">
              <label>GST</label>
              <select onChange={(e) => setGst(e.target.value)} value={gst}>
                <option value="">Select GST</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
              </select>
            </div>
            <div className="mt-3 opt">
              <div className="d-flex flex-row gap-4 justify-content-end">
                <ButtonComponent
                  buttonName="View"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleView}
                />
                <ButtonComponent
                  buttonName="Save"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleSave}
                />
                <ButtonComponent
                  buttonName="Clear"
                  buttonIcon={<FaSave />}
                  onClickEvent={handleClear}
                />
                <ButtonComponent
                  buttonName="Close"
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
