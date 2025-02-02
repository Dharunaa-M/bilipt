import React from "react";
import "../../pages/DashboardPage/dashboard.css";

const Outstanding = ({ outstandingPrice }) => {

    const tableRowStyle = {
        borderColor: "#fff",
        fontFamily: "Poppins",
        fontSize: "10px",
        fontWeight: "500",
        color: "#998e8e"
    }

    const tableStyle = {
        borderCollapse: "separate",
        borderSpacing: "0 1em"
    }

  return (
    <div className="outstanding">
      <div className="outstanding-heading">
        <h4>CUSTOMER OUTSTANDING</h4>
        <p>&#8377;{outstandingPrice}</p>
      </div>
      <table className="table w-100 mt-4" style={tableStyle}>
        <thead>
          <th
            className="text-start"
            style={{
              fontFamily: "Poppins",
              fontSize: "10px",
              color: "#3f53b6",
            }}
          >
            NAME
          </th>
          <th
            className="text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: "10px",
              color: "#3f53b6",
            }}
          >
            PAID
          </th>
          <th
            className="text-end"
            style={{
              width: "190px",
              fontFamily: "Poppins",
              fontSize: "10px",
              color: "#3f53b6",
            }}
          >
            BALANCE
          </th>
        </thead>
        <tbody className="mb-5">
            {
                Array(12)
                .fill("")
                .map((idx) => (
                    <tr key={idx} style={tableRowStyle}>
                        <td className="text-start p-0" style={{color: "#998e8e"}}>Arjun</td>
                        <td className="text-center p-0" style={{color: "#998e8e"}}>-&#8377;23,765</td>
                        <td className="text-end p-0" style={{color: "#ea565e"}}>&#8377;8450</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default Outstanding;
