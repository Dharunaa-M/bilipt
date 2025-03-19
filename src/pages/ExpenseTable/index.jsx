import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

const ExpenseTable = () => {

    const [purchaseDetails, setPurchaseDetails] = useState([])
    const navigate = useNavigate();

    const handleAddExpense = () => {
        navigate('/purchase')
    }

    useEffect(() => {
        const puchaseData = JSON.parse(localStorage.getItem("purchase"))
        setPurchaseDetails(puchaseData)
    }, [])


  return (
    <>
        <div className="d-block w-100" style={{paddingLeft: "125px", background: "rgba(241, 239, 236, 0.98)"}}>
            <div className="p-5">
                <div className='container'>
                    <div className="d-flex flex-row-reverse mb-2">
                        <button className='add-btn' onClick={handleAddExpense}>Expense +</button>
                    </div>
                    <table className='w-100 mt-5' >
                        <thead>
                            <tr style={{background: "#d4d6c9"}}>
                                <th className='text-center p-2'>DATE</th>
                                <th className='text-center p-2'>CATEGORY</th>
                                <th className='text-center p-2'>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchaseDetails.map((purchase, idx) => (
                                    <tr className=''>
                                        <td className="pt-4 text-center">
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{purchase.date}</span>
                                        </td>
                                        <td className='pt-4 text-center'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{purchase.category}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{purchase.amount}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExpenseTable