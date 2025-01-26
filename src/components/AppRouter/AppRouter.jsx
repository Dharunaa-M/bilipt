import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/LoginPage/Login";
import Dashboard from "../../pages/DashboardPage/Dashboard";
import CustomerMaster from "../../pages/CustomerMasterPage/CustomerMaster";
import ProductMaster from "../../pages/ProductMasterPage/ProductMaster";
import Invoice from "../../pages/InvoicePage/Invoice";

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customermaster" element={<CustomerMaster />} />
            <Route path="/productmaster" element={<ProductMaster />} />
            <Route path="/invoice" element={<Invoice />} />
          </>
          <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
