import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const InvoiceDetails = () => {

    const [productDetails, setProductDetails] = useState([])
    const [credentials, setCredentials] = useState({name: "", password: ""})
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/invoice')
    }

    const totalAmount = localStorage.getItem("totalAmount");

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("productDetails")) || []
        setProductDetails(storedProducts)
        const storedUsers = JSON.parse(localStorage.getItem("login")) || {name: "", password: ""}
        setCredentials(storedUsers)
    },[])

  return (
    <>
        <div className="d-block w-100" style={{paddingLeft: "125px", background: "rgba(241, 239, 236, 0.98)"}}>
            <div className="p-5">
                <div className='container'>
                    <div className="d-flex flex-row-reverse mb-2">
                        <button className='add-btn' onClick={handleAddProduct}>SALES INVOICE +</button>
                    </div>
                    <table className='w-100 mt-5' >
                        <thead>
                            <tr style={{background: "#d4d6c9"}}>
                                <th className='text-center p-2'>CUSTOMER NAME</th>
                                <th className='text-center p-2'>INVOICE ID</th>
                                <th className='text-center p-2'>DATE</th>
                                <th className='text-center p-2'>TOTAL AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productDetails.length > 0 ? (
                                productDetails.map((product, idx) => (
                                    <tr className='' key={idx}>
                                        <td className="pt-4 text-center">
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{credentials.name}</span>
                                        </td>
                                        <td className='pt-4 text-center'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.id}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>21/3/2025</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{totalAmount}</span>
                                        </td>
                                    </tr>
                                ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center py-4">No products available</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default InvoiceDetails