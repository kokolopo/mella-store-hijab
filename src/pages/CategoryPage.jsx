import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import useCategory from "../states/useCategory";
import Cookies from "js-cookie";

const CategoryPage = () => {
  const token = Cookies.get("token");
  const { data, loading, error, fetchCategory, postCategory, responsePost } =
    useCategory();

  const [input, setInput] = useState({
    name: "",
    desc: "",
  });

  useEffect(() => {
    fetchCategory(token);
  }, [responsePost]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    postCategory(input, token);
    setInput({
      ...input,
      ["name"]: "",
      ["desc"]: "",
    });
  };

  if (loading) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((category, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{category.name}</td>
                      <td>{category.desc}</td>
                      <td>
                        <div className="flex space-x-3">
                          <FontAwesomeIcon
                            className="hover:cursor-pointer"
                            icon={faPen}
                            style={{ color: "#ff9e00" }}
                            onClick={() =>
                              document.getElementById("my_modal_3").showModal()
                            }
                          />
                          <FontAwesomeIcon
                            className="hover:cursor-pointer"
                            icon={faTrash}
                            style={{ color: "#ff1540" }}
                            onClick={() =>
                              document
                                .getElementById("my_modal_remove")
                                .showModal()
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* modal */}
          <dialog id="my_modal_remove" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Warning!</h3>
              <p className="py-4">Are you sure to remove this?</p>
              <div className="modal-action">
                <div className="flex space-x-4">
                  <button className="btn btn-default">Yes</button>
                  <button className="btn btn-error text-base-100">Close</button>
                </div>
              </div>
            </div>
          </dialog>

          {/* button add */}
          <button
            className="btn btn-active btn-info text-base-100 px-14"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Category
          </button>

          {/* modal add category */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Add Category</h3>

              <form className="flex flex-col" onSubmit={handleFormSubmit}>
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Category Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="type here"
                    className="input input-bordered w-full "
                    name="name"
                    value={input.name}
                    onChange={handleInputChange}
                  />
                </label>

                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="type here"
                    name="desc"
                    value={input.desc}
                    onChange={handleInputChange}
                  ></textarea>
                </label>

                <button type="submit" className="btn btn-accent mt-4">
                  Submit
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
