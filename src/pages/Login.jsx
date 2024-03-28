import React from "react";
import image from "../assets/image_login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen flex h-screen">
        {/* section-left */}
        <div className="w-[50%] bg-base2 flex items-center justify-center">
          <img src={image} alt="asd" className="w-[550px]" />
        </div>

        {/* section-right */}
        <div className="w-[50%] bg-base1 flex pt-[15%] justify-center">
          <div className="w-[20vw] flex flex-col space-y-7">
            <div className="logo italic font-semibold text-5xl text-[#86C8BC] text-center w-full">
              Mella Hijab
            </div>
            <div className="w-full">
              <form className="flex flex-col space-y-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="input py-5 shadow-md input-sm   w-full max-w-xs"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="input py-5 shadow-md input-sm   w-full max-w-xs"
                  required
                />

                <button
                  type="submit"
                  className="focus:outline-none text-base-100 text-xl bg-[#86C8BC] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2 mb-2 w-full"
                >
                  <Link to={"/"}>Masuk</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
