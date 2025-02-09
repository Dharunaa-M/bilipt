import React from "react";
import { Modal } from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import ButtonComponent from "../Button/ButtonComponent";
import "./productMasterTable.css";

const ProductMasterTable = ({ show, onSet }) => {
  const handleSave = () => {
    onSet(false);
  };

  return (
    <>
      <Modal show={show} size="lg" centered>
        <Modal.Body>
          <MdClose
            className="position-absolute end-0 top-0 me-5 mt-4"
            onClick={() => onSet(false)}
          />
          <h5 className="table-heading">Product List</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Inactive</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Base Price</th>
                <th>Unit Name</th>
                <th>Sales Price</th>
                <th>GST</th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill("")
                .map((_) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>1</td>
                    <td>Pen</td>
                    <td>&#8377;12000</td>
                    <td>Pen Bulk</td>
                    <td>&#8377;1000</td>
                    <td>12%</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="w-100 d-flex justify-content-center align-items-center flex-row">
            <div className="d-flex flex-row gap-5">
              <ButtonComponent buttonName="Edit" buttonIcon={<MdEdit />} />
              <ButtonComponent
                buttonName="Save"
                buttonIcon={<FaSave />}
                onClickEvent={handleSave}
              />
              <ButtonComponent buttonName="Delete" buttonIcon={<MdDelete />} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductMasterTable;
