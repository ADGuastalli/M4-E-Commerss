import { IUser, ILogin } from "@/interfece/Interface";

export const postSignup = async (user: Omit<IUser, "id">) => {
  const response = await fetch(
    "https://m4-e-commerss.vercel.app/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const data = await response.json();
  return data;
};

export const postSignin = async (credentials: ILogin) => {
  try {
    const response = await fetch(
      "https://m4-e-commerss.vercel.app/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during sign in:", error);
    throw error;
  }
};

export const getUserOrders = async (token: string) => {
  const response = await fetch(
    "https://m4-e-commerss.vercel.app/users/orders",
    {
      headers: {
        authorization: `${token}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
