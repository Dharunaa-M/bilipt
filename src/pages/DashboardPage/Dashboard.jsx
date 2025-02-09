import React from "react";
import { FaTag } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";
import Graph from "../../components/Graph/Graph";
import Outstanding from "../../components/Outstanding/Outstanding";
import RangeComponent from "../../components/Range/RangeComponent";
import RecentInvoice from "../../components/Recent Invoice/RecentInvoice";
import TodaySales from "../../components/Today Sales/TodaySales";
import "./dashboard.css";
import HeaderComponent from "../../components/Header/HeaderComponent";

const Dashboard = () => {
  return (
    <>
      <div className="d-block w-100" style={{paddingLeft: "125px"}}>
        <HeaderComponent headerText="DASHBOARD" />
        <div className="container1">
          <div className="container2">
            <div className="d-flex justify-content-start gap-5">
              <RangeComponent
                heading="SALES"
                classname1="sales"
                classname2="sales-heading"
                icon1={<IoMdContacts style={{ color: "#a259ff" }} />}
                icon2={<FaArrowTrendUp style={{ color: "#00000066" }} />}
                price="4,67,080"
                plus="0"
                percent="100.0"
              />
              <RangeComponent
                heading="PURCHASE"
                classname1="purchase"
                classname2="purchase-heading"
                icon1={<FaTag style={{ color: "#ea4335" }} />}
                icon2={<FaArrowTrendUp style={{ color: "#00000066" }} />}
                price="4,67,080"
                plus="0"
                percent="100.0"
              />
              <RangeComponent
                heading="PROFIT"
                classname1="profit"
                classname2="profit-heading"
                icon1={<TbMoneybag style={{ color: "#0acf83" }} />}
                icon2={<FaArrowTrendUp style={{ color: "#00000066" }} />}
                price="4,67,080"
                plus="0"
                percent="100.0"
              />
            </div>
            <Graph classname1="graph" />
          </div>
          <RecentInvoice />
          <TodaySales
            slaesPrice={0}
            creditMoney="0,00,00,00,00,000"
            debitMoney="0,00,00,00,00,000"
            invoiceMoney="000"
            salesMoney="000"
            totCustomers="000"
            totSuppliers="000"
          />
          <Outstanding outstandingPrice="42250" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
