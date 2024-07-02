"use client";

import React from "react";
import { useState, useContext } from "react";
import validate from "../helpers/validate";
import { UserContext } from "../../context/userContex";
import { useRouter } from "next/navigation";

function Register() {
  const { signUp } = useContext(UserContext);
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    repeat_password: "",
  });

  const [errors, setErrors] = useState({
    name: "*",
    email: "*",
    address: "*",
    phone: "*",
    password: "*",
    repeat_password: "*",
  });

  const todosLosCamposCompletos = () => {
    return (
      userData.name !== "" &&
      userData.email !== "" &&
      userData.address !== "" &&
      userData.phone !== "" &&
      userData.password !== "" &&
      userData.repeat_password !== ""
    );
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(
      validate(newUserData, [
        "name",
        "email",
        "address",
        "phone",
        "password",
        "repeat_password",
      ])
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (userData.password !== userData.repeat_password) {
      alert("Las contraseñas no coinciden");
    } else if (Object.keys(errors).length) {
      alert("Faltan campos por rellenar");
    } else {
      const success = await signUp(userData);
      if (success) router.push("/home");
      if (!success) alert("Error al registrar");
    }
  };

  return (
    <div>
      <form className="max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.name}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
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
            type="text"
            name="address"
            id="address"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.address && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.address}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.phone && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.phone}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Phone
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
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
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="repeat_password"
            id="repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleInputChange}
          />
          {errors.repeat_password && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.repeat_password}
            </p>
          )}
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Confirm password
          </label>
        </div>
        <p
          style={{
            color: "red",
            fontSize: "10px",
            marginTop: "10px",
            textShadow: "1px 1px 1px black",
          }}
        >
          * Todos los campos son obligatorios
        </p>
        <button
          disabled={!todosLosCamposCompletos()}
          type="submit"
          className=" text-black bg-white hover:bg-black hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
