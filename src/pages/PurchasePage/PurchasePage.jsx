import React from 'react'
import "./purchasePage.css"
import HeaderComponent from '../../components/Header/HeaderComponent'

const PurchasePage = () => {

  const handleSubmit = () => {
    e.preventDefalut();
    console.log("Submit is clicked!")
  }

  return (
    <div className="d-block w-100">
      <HeaderComponent headerText="PURCHASE" />
      <div className="purchase-container">
        <form>
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Date</label>  
            <input type="text" placeholder='Enter the date' style={{marginLeft: "25px"}} />
          </div> 
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Category</label>  
            <select>
              <option value="">Select the category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div> 
          <div className="d-flex flex-row gap-5 align-items-center">
            <label>Amount</label>  
            <input type="number" placeholder='Enter the abount spent on purchase' />
          </div> 
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PurchasePage