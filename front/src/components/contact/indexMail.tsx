"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validate from "../helpers/validate";

function ContactMail() {
  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    user_name: "*",
    user_email: "*",
    message: "*",
  });

  const todosLosCamposCompletos = (): boolean => {
    return (
      userData.user_name !== "" &&
      userData.user_email !== "" &&
      userData.message !== ""
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(validate(newUserData, ["user_name", "user_email", "message"]));
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_8x3oa38",
          "template_15lskzj",
          form.current,
          "T2_Vw0sS7A68-dQPw"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h2 className="text-3xl font-bold m-10 text-center">Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Nombre y Apellidos:</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            name="user_name"
            id="name"
            onChange={handleInputChange}
          />
          {errors.user_name && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.user_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="email"
            name="user_email"
            id="email"
            onChange={handleInputChange}
          />
          {errors.user_email && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.user_email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            id="message"
            name="message"
            onChange={handleInputChange}
          />
          {errors.message && (
            <p style={{ color: "red", fontSize: "15px", marginTop: "0px" }}>
              {errors.message}
            </p>
          )}
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
        <div className="flex justify-center mt-4">
          <input
            disabled={!todosLosCamposCompletos()}
            onClick={openModal}
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-gray-400 border-none rounded-lg text-black py-4 px-8 text-center no-underline inline-block text-sm cursor-pointer hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
            type="submit"
            value="Enviar"
          />
        </div>
        {isModalOpen && (
          <div
            id="popup-modal"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
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
                      d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                      fill="#1C274C"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Mensaje Enviado Exitosamente
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactMail;
