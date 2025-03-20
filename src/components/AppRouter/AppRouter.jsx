import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Login from "../../pages/LoginPage/Login";
import Dashboard from "../../pages/DashboardPage/Dashboard";
import CustomerMaster from "../../pages/CustomerMasterPage/CustomerMaster";
import ProductMaster from "../../pages/ProductMasterPage/ProductMaster";
import Invoice from "../../pages/InvoicePage/Invoice";
import PurchasePage from "../../pages/PurchasePage/PurchasePage"
import Navbar from "../Navbar/Navbar";
import CustomerMasterTable from "../../pages/CustomerTable";
import ProductTable from "../../pages/ProductTable";
import ExpenseTable from "../../pages/ExpenseTable";
import InvoiceDetails from "../../pages/InvoiceDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayoutWithNavbar />}> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customermaster" element={<CustomerMaster />} />
          <Route path="/viewcustomer" element={<CustomerMasterTable />} />
          <Route path="/productmaster" element={<ProductMaster />} />
          <Route path="/viewproduct" element={<ProductTable />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/invoicedetails" element={<InvoiceDetails />} />
          <Route path="/purchasedetails" element={<ExpenseTable />} />
          <Route path="/purchase" element={<PurchasePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

const LayoutWithNavbar = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/"; // Simplified condition

  return (
    <div className="d-flex">
      {!hideNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <Outlet />
    </div>
  );
};

export default AppRouter;