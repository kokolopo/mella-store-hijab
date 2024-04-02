import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import useProduct from "../states/useProduct";
import useCategory from "../states/useCategory";
import useVariant from "../states/useVariant";
import Cookies from "js-cookie";

const ProductPage = () => {
  const token = Cookies.get("token");
  const { data, loading, error, fetchProduct, postProduct, responsePost } =
    useProduct();

  const { fetchCategory, categories } = useCategory();
  const { fetchVariant, variants } = useVariant();

  const [input, setInput] = useState({
    product_name: "",
    sku: "",
    desc: "",
    category_id: null,
    variant_id: null,
    price: null,
  });

  useEffect(() => {
    fetchProduct(token);
    fetchCategory(token);
    fetchVariant(token);
  }, [responsePost]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name == "category_id" || name == "variant_id" || name == "price") {
      setInput({
        ...input,
        [name]: parseInt(value),
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    postProduct(input, token);
    setInput({
      ...input,
      ["product_name"]: "",
      ["sku"]: "",
      ["desc"]: "",
      ["category_id"]: null,
      ["variant_id"]: null,
      ["price"]: null,
    });
  };

  const listProduct =
    data &&
    data.map((product, index) => (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{product.product_name}</td>
        <td>{product.variant.name}</td>
        <td>{product.category.name}</td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td>
          <div className="flex space-x-3">
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faPen}
              style={{ color: "#ff9e00" }}
              onClick={() => document.getElementById("my_modal_3").showModal()}
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
    ));

  const listCategory =
    categories &&
    categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ));

  const listVariant =
    variants &&
    variants.map((variant) => (
      <option key={variant.id} value={variant.id}>
        {variant.name}
      </option>
    ));

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
                  <th>Variant/color</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{data && listProduct}</tbody>
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
          <button
            className="btn btn-active btn-info text-base-100 px-14"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add Product
          </button>

          {/* modal add product */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Add Product</h3>

              <form className="flex flex-col" onSubmit={handleFormSubmit}>
                <div className="flex space-x-3">
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Product Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="type here"
                      className="input input-bordered w-full"
                      name="product_name"
                      value={input.product_name}
                      onChange={handleInputChange}
                    />
                    <div className="label">
                      <span className="label-text">SKU</span>
                    </div>
                    <input
                      type="text"
                      placeholder="type here"
                      className="input input-bordered w-full"
                      name="sku"
                      value={input.sku}
                      onChange={handleInputChange}
                    />
                  </label>

                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Category</span>
                    </div>
                    <select
                      className="select select-bordered"
                      name="category_id"
                      value={input.category_id}
                      onChange={handleInputChange}
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      {categories && listCategory}
                    </select>

                    <div className="label">
                      <span className="label-text">Variant</span>
                    </div>
                    <select
                      className="select select-bordered"
                      name="variant_id"
                      value={input.variant_id}
                      onChange={handleInputChange}
                    >
                      <option disabled selected>
                        Pick one
                      </option>
                      {variants && listVariant}
                    </select>
                  </label>
                </div>

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

                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="number"
                    placeholder="type here"
                    className="input input-bordered w-full "
                    name="price"
                    value={input.price}
                    onChange={handleInputChange}
                  />
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

export default ProductPage;
