import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open w-fit">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>

      {/* Menu */}
      <div className="drawer-side overflow-y-scroll no-scrollbar shadow-inner">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>

        {/* logo */}
        <div className="logo font-semibold text-4xl text-base-100 text-center bg-base2 py-4">
          Mella Hijab
        </div>

        <ul className="menu p-4 w-80 min-h-full bg-base2 font-semibold text-xl text-base-100">
          {/* Sidebar content here */}
          <li>
            <Link to={`/`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`/products`}>Product</Link>
          </li>
          <li>
            <Link to={`/categories`}>Category</Link>
          </li>
          <li>
            <Link to={`/variants`}>Variant</Link>
          </li>
          <li>
            <Link to={`/transactions`}>Transaction</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
