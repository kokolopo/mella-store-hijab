import React from "react";
import Sidebar from "../components/Sidebar";

const TransactionPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="bg-base1">Transaction</div>
      </div>
    </>
  );
};

export default TransactionPage;
