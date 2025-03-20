import React from "react";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BsBoxFill } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Assets from "../../assets/assets";

import "./navbar.css";

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
        <div className="nav-container">
          <div className="py">
            <img src={Assets.Logo} alt="" />
          </div>
          <div className="d-flex flex-column gap-5">
            <Link to="/dashboard" className="link">
              <FaHome className="icon" /> <span>Home</span>
            </Link>
            <Link to="/viewcustomer" className="link">
              <RiContactsFill className="icon" /> <span>Customer Master</span>
            </Link>
            <Link to="/viewproduct" className="link">
              <BsBoxFill className="icon" /> <span>Product Master</span>
            </Link>
            <Link to="/invoicedetails" className="link">
              <FaFileInvoiceDollar className="icon" /> <span>Sales Invoice</span>
            </Link>
            <Link to="/purchasedetails" className="link">
              <BiSolidPurchaseTag className="icon" /> <span>Purchase</span>
            </Link>
          </div>
          <div onClick={handleLogout}>
            <Link to="/" className="link">
              <BiLogOut className="icon"/> <span>Logout</span>
            </Link>
          </div>
        </div>
    </>
  );
};

export default Navbar;
