"use client";
import React, { useState, useEffect, useContext } from "react";
import Logout from "./logOut";
import { UserContext } from "@/context/userContex";
import Orders from "./ordes/page";

export const Dashboard: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const { isLogged, user } = useContext(UserContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className="mx-36  ">
      <div className="text-center">
        <div className="text-left">
          <h1 className="text-5xl font-bold m-10">Mi Perfil</h1>
          <h3 className="font-bold text-xl mb-2">
            Nombre de Usuario: {user?.user?.name}
          </h3>
          <h3 className="font-bold text-xl mb-2">
            Mail de Usuario: {user?.user?.email}
          </h3>
          <h3 className="font-bold text-xl mb-2">
            Rol de Usuario: {user?.user?.role}
          </h3>
        </div>
        <div className="mt-10">
          <Orders />
        </div>
      </div>
      <div className="flex items-center justify-end mt-32">
        <Logout setToken={setToken} />
      </div>
    </div>
  );
};

export default Dashboard;
