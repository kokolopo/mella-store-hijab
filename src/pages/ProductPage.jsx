import React from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex justify-around bg-base-100 w-full p-10">
          {/* tables */}
          <div className="overflow-x-auto">
            <table className="table table-lg">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Variant/color</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>
                    <div className="flex space-x-3">
                      <FontAwesomeIcon
                        className="hover:cursor-pointer"
                        icon={faPen}
                        style={{ color: "#ff9e00" }}
                      />
                      <FontAwesomeIcon
                        className="hover:cursor-pointer"
                        icon={faTrash}
                        style={{ color: "#ff1540" }}
                        onClick={() =>
                          document.getElementById("my_modal_remove").showModal()
                        }
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* modal */}
          <dialog id="my_modal_remove" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Warning!</h3>
              <p className="py-4">Are you sure to remove this product?</p>
              <div className="modal-action">
                <div className="flex space-x-4">
                  <button className="btn btn-default">Yes</button>
                  <button className="btn btn-error text-base-100">Close</button>
                </div>
              </div>
            </div>
          </dialog>

          {/* button add */}
          <button className="btn btn-active btn-info text-base-100 px-14">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
