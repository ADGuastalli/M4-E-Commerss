"use client";

import { useState, useEffect } from "react";

//components
import Register from "@/components/register/Register";
import Login from "@/components/login/Login";

import styles from "../home.module.css";

const RegisterLogin: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div className={styles.conteinerForm}>
      <div className={styles.register}>
        <label className="text-2xl font-bold">Register</label>
        <Register />
      </div>
      <div className={styles.login}>
        <label className="text-2xl font-bold">Login</label>
        <Login token={token} setToken={setToken} />
      </div>
    </div>
  );
};

export default RegisterLogin;
