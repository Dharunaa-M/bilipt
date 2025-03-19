import React, { useState } from 'react'
import "./purchasePage.css"
import HeaderComponent from '../../components/Header/HeaderComponent'

const PurchasePage = () => {

  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const existingData = JSON.parse(localStorage.getItem("purchase")) || [];

    const newPurchase = {
      date,
      category,
      amount
    }

    const updatedData = [...existingData, newPurchase];
    localStorage.setItem("purchase", JSON.stringify(updatedData))
    setDate("");
    setCategory("");
    setAmount("");
  }

  return (
    <div className="d-block w-100" style={{paddingLeft: "125px"}}>
      <HeaderComponent headerText="PURCHASE" />
      <div className="purchase-container">
        <form  onSubmit={handleSubmit}>
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Date</label>  
            <input 
              type="date" 
              className='custom-date' 
              placeholder='Enter the date' 
              style={{marginLeft: "25px"}} 
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div> 
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Category</label>  
            <select onChange={(e) => setCategory(e.target.value)} value={category}>
              <option value="">Select the category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div> 
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Amount</label>  
            <input 
              type="number" 
              placeholder='Enter the abount spent on purchase' 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div> 
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PurchasePage