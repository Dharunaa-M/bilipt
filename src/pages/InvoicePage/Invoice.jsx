import React from 'react'
import HeaderComponent from "../../components/Header/HeaderComponent"
import "./invoice.css"

const Invoice = () => {
  return (
    <>
      <div className='"d-block w-100' style={{paddingLeft: "125px"}}>
        <HeaderComponent headerText="SALES INVOICE" />
        <div className="sales-container">

        </div>
      </div>
    </>
  )
}

export default Invoice