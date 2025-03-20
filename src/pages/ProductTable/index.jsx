import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const ProductTable = () => {

    const [productDetails, setProductDetails] = useState([])
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/productmaster')
    }

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("productDetails")) || []
        setProductDetails(storedProducts)
    },[])
console.log(productDetails)
  return (
    <>
        <div className="d-block w-100" style={{paddingLeft: "125px", background: "rgba(241, 239, 236, 0.98)"}}>
            <div className="p-5">
                <div className='container'>
                    <div className="d-flex flex-row-reverse mb-2">
                        <button className='add-btn' onClick={handleAddProduct}>Add Product +</button>
                    </div>
                    <table className='w-100 mt-5' >
                        <thead>
                            <tr style={{background: "#d4d6c9"}}>
                                <th className='text-start p-2'>NAME</th>
                                <th className='text-center p-2'>PRODUCT CATEGORY</th>
                                <th className='text-center p-2'>BRAND NAME</th>
                                <th className='text-center p-2'>PRODUCT ID</th>
                                <th className='text-center p-2'>BASE PRICE</th>
                                <th className='text-center p-2'>SALES PRICE</th>
                                <th className='text-center p-2'>UNIT NAME</th>
                                <th className='text-center p-2'>GST</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            productDetails.length > 0 ? (
                                productDetails.map((product, idx) => (
                                    <tr className='' key={idx}>
                                        <td className="pt-4 text-center">
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.name}</span>
                                        </td>
                                        <td className='pt-4 text-center'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.category}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.brand}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.id}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.basePrice}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.rate}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.unit}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{product.gst}</span>
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

export default ProductTable