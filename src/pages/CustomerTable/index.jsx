import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const CustomerMasterTable = () => {

    const navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/customermaster')
    }

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
      const storedCustomers = JSON.parse(localStorage.getItem("customers")) || [];
      setCustomers(storedCustomers);
    }, []);

  return (
    <>
        <div className="d-block w-100" style={{paddingLeft: "125px", background: "rgba(241, 239, 236, 0.98)"}}>
            <div className="p-5">
                <div className='container'>
                    <div className="d-flex flex-row-reverse mb-2">
                        <button className='add-btn' onClick={handleAddCustomer}>Add Customer +</button>
                    </div>
                    <table className='w-100 mt-5' >
                        <thead>
                            <tr style={{background: "#d4d6c9"}}>
                                <th className='text-start p-2'>NAME</th>
                                <th className='text-center p-2'>EMAIL ADDRESS</th>
                                <th className='text-center p-2'>PHONE NUMBER</th>
                                <th className='text-end p-2'>ADDRESS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((customer, idx) => (
                                    <tr className=''>
                                        <td className="pt-4">
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{customer.name}</span>
                                        </td>
                                        <td className='pt-4 text-center'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{customer.email}</span>
                                        </td>
                                        <td className='pt-4 text-center data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{customer.phoneNumber}</span>
                                        </td>
                                        <td className='pt-4 text-end data'>
                                            <span style={{background: "#f1efec"}} className='p-2 w-100 rounded-3'>{customer.address}</span>
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

export default CustomerMasterTable