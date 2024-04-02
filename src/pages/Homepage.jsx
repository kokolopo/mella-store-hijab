import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Homepage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-base1">default</div>
      </div>
    </>
  );
};

export default Homepage;
