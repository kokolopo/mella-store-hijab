import React from "react";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-base1">default dashboard</div>
      </div>
    </>
  );
};

export default Homepage;
