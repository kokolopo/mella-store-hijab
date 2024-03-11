import React from "react";
import image from "../assets/image_login.png";

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
              <form className="flex flex-col space-y-3">
                <input
                  type="text"
                  id="default-input"
                  placeholder="Email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <input
                  type="password"
                  id="default-input"
                  placeholder="Password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <button
                  type="button"
                  class="focus:outline-none text-base-100 text-xl bg-[#86C8BC] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 mb-2 w-full"
                >
                  Masuk
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
