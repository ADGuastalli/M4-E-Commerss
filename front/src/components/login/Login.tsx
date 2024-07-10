"use client";

import React from "react";
import { useState, useContext } from "react";
import validate from "../helpers/validate";
import { UserContext } from "../../context/userContex";
import { useRouter } from "next/navigation";
import { IErrors } from "../../interfece/Interface";
import Modal from "../modal/indexModal";

function Login({ token, setToken }: any) {
  const { signIn } = useContext(UserContext);
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<IErrors>({
    email: "*",
    password: "*",
  });

  const todosLosCamposCompletos = () => {
    return userData.email !== "" && userData.password !== "";
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };

    setUserData(newUserData);
    setErrors(validate(newUserData, ["email", "password"]));
  };

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await signIn(userData);
    if (success) {
      setSuccessModal(true);
      setTimeout(() => {
        router.push("/home");
      }, 3000);
    } else {
      setErrorModal(true);
    }
  };

  return (
    <div className="mt-5">
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.email}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.password}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Password
          </label>
        </div>

        {!todosLosCamposCompletos() && (
          <p
            style={{
              color: "red",
              fontSize: "10px",
              marginTop: "10px",
              textShadow: "1px 1px 1px black",
            }}
          >
            * All fields are mandatory
          </p>
        )}
        <button
          disabled={!todosLosCamposCompletos()}
          type="submit"
          className="disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-black bg-white hover:bg-black hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3"
        >
          Login
        </button>
      </form>
      <Modal isOpen={successModal} onClose={() => setSuccessModal(false)}>
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z"
            fill="#1C274C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63424 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.171 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63424 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.171 21.9607 21.0659 21.0659C21.9607 20.171 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63424 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.171 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM4.6156 2.80595C5.32682 2.11847 6.26636 1.80463 7.60419 1.63027C8.94217 1.45589 10.7046 1.45001 12.75 1.45001C14.7954 1.45001 16.5578 1.45589 17.8958 1.63027C19.2336 1.80463 20.1731 2.11847 20.8843 2.80595C21.5718 3.51718 21.8856 4.45672 22.06 5.79455C22.2344 7.13253 22.2403 8.89495 22.2403 10.9404C22.2403 12.9858 22.2344 14.7482 22.06 16.0862C21.8856 17.4239 21.5718 18.3636 20.8843 19.0509C20.1731 19.7384 19.2336 20.0522 17.8958 20.2266C16.5578 20.4009 14.7954 20.4068 12.75 20.4068C10.7046 20.4068 8.94217 20.4009 7.60419 20.2266C6.26636 20.0522 5.32682 19.7384 4.6156 19.0509C3.92812 18.3636 3.61428 17.4239 3.43992 16.0862C3.26554 14.7482 3.25966 12.9858 3.25966 10.9404C3.25966 8.89495 3.26554 7.13253 3.43992 5.79455C3.61428 4.45672 3.92812 3.51718 4.6156 2.80595Z"
            fill="#1C274C"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Successfully logged in, redirecting to Home in 3 seconds...
        </h3>
      </Modal>
      <Modal isOpen={errorModal} onClose={() => setErrorModal(false)}>
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10V13"
            stroke="#1C274C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17H12.01"
            stroke="#1C274C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 1.25C8.89749 1.25 6.43994 1.25 4.71459 1.58155C3.01819 1.9031 1.73156 2.51483 0.823545 3.42355C-0.0851685 4.33156 -0.696903 5.61818 -1.01846 7.31458C-1.35 9.03994 -1.35 11.4975 -1.35 14.6001C-1.35 17.7025 -1.35 20.1601 -1.01846 21.8855C-0.696903 23.5819 -0.0851685 24.8685 0.823545 25.7765C1.73156 26.6852 3.01819 27.2969 4.71459 27.6184C6.43994 27.95 8.89749 27.95 12.0001 27.95C15.1025 27.95 17.56 27.95 19.2854 27.6184C20.9818 27.2969 22.2685 26.6852 23.1765 25.7765C24.0852 24.8685 24.6969 23.5819 25.0184 21.8855C25.35 20.1601 25.35 17.7025 25.35 14.6001C25.35 11.4975 25.35 9.03994 25.0184 7.31458C24.6969 5.61818 24.0852 4.33156 23.1765 3.42355C22.2685 2.51483 20.9818 1.9031 19.2854 1.58155C17.56 1.25 15.1025 1.25 12.0001 1.25ZM4.61565 2.8059C5.32687 2.11843 6.26642 1.80458 7.60424 1.6302C8.94221 1.45582 10.7047 1.44995 12.7501 1.44995C14.7954 1.44995 16.558 1.45582 17.8959 1.6302C19.2337 1.80458 20.1732 2.11843 20.8844 2.8059C21.572 3.51712 21.8858 4.45667 22.0602 5.79449C22.2346 7.13247 22.2404 8.8949 22.2404 10.9403C22.2404 12.9857 22.2346 14.7481 22.0602 16.0861C21.8858 17.4238 21.572 18.3634 20.8844 19.0508C20.1732 19.7382 19.2337 20.052 17.8959 20.2264C16.558 20.4008 14.7954 20.4067 12.7501 20.4067C10.7047 20.4067 8.94221 20.4008 7.60424 20.2264C6.26642 20.052 5.32687 19.7382 4.61565 19.0508C3.92818 18.3634 3.61433 17.4238 3.43996 16.0861C3.26558 14.7481 3.2597 12.9857 3.2597 10.9403C3.2597 8.8949 3.26558 7.13247 3.43996 5.79449C3.61433 4.45667 3.92818 3.51712 4.61565 2.8059Z"
            fill="#1C274C"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Login unsuccessful, some of the data is incorrect. Please try again.
        </h3>
      </Modal>
    </div>
  );
}

export default Login;
