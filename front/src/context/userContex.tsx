"use client";
import {
  IUser,
  IUserContextType,
  ICreateOrderDto,
  ILogin,
  IloginUserRegister,
} from "../interfece/Interface";
import { useEffect, useState, createContext } from "react";
import { postSignin, postSignup, getUserOrders } from "../server/fechUsers";

export const UserContext = createContext<IUserContextType>({
  user: null,
  setUser: () => {},
  isLogged: false,
  signIn: async () => false,
  signUp: async () => false,
  orders: [],
  logOut: () => {},
  getOrders: async () => {},
  setIsLogged: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Partial<IloginUserRegister> | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [orders, setOrders] = useState<ICreateOrderDto[]>([]);

  const signUp = async (user: Omit<IUser, "id">) => {
    try {
      const data = await postSignup(user);
      if (data.id) {
        await signIn({ email: user.email, password: user.password });
        return true;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  const signIn = async (credentials: ILogin) => {
    try {
      const data = await postSignin(credentials);

      if (!data.token) {
        throw new Error("Invalid token");
      }

      setUser(data);
      typeof window !== "undefined" &&
        localStorage.setItem("user", JSON.stringify(data));
      typeof window !== "undefined" &&
        localStorage.setItem("token", data.token);
      setIsLogged(true);
      return true;
    } catch (error) {
      console.error("Sign in failed:", error);
      return false;
    }
  };
  const getOrders = async () => {
    try {
      const token: string =
        (typeof window !== "undefined" && localStorage.getItem("token")) || "";
      const data = await getUserOrders(token);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    typeof window !== "undefined" && localStorage.removeItem("user");
    typeof window !== "undefined" && localStorage.removeItem("token");
    setUser(null);
    setIsLogged(false);
  };

  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, [user]);

  useEffect(() => {
    const user = typeof window !== "undefined" && localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      return;
    }
    setUser(null);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        signIn,
        signUp,
        logOut,
        getOrders,
        orders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
