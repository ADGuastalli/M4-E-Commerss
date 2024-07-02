// User

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

interface IRegisterUserResponse {
  name: string;
  email: string;
  address: string;
  phone: string;
  id: number;
  role: string;
  credential: ICreateCredentials;
  password: string;
}

interface IUser {
  name: string;
  email: string;
  address: string;
  phone: string;
  id: number;
  role?: string;
  password: string;
  orders?: number[];
}

interface IUserContextType {
  user: Partial<IloginUserRegister> | null;
  setUser: React.Dispatch<
    React.SetStateAction<Partial<IloginUserRegister> | null>
  >;
  isLogged: boolean;
  signIn: (credentials: ILogin) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  logOut: () => void;
  orders: ICreateOrderDto[];
  getOrders: () => void;
  setIsLogged: (isLogged: boolean) => void;
}

interface IloginUserRegister {
  login: boolean;
  token: string;
  user: Partial<IUser> | null;
}

interface ICreateCredentials {
  password: string;
  id: number;
}

interface ILogin {
  email: string;
  password: string;
}

// Orders

interface ICreateOrderDto {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: number[];
}

// Products

interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

interface IProductListProps {
  products: IProduct[];
}

interface IProductCardProps {
  product: IProduct;
  remove?: () => void;
}

interface IProductProps {
  product: IProduct;
}

interface ICardProps {
  product: IProduct;
}

interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (product: number) => void;
  removeFromCart: (product: number) => void;
  total: number;
  proccedToCheckout: () => void;
}

export type {
  IRegisterUser,
  IRegisterUserResponse,
  IUser,
  IloginUserRegister,
  ICreateCredentials,
  ICreateOrderDto,
  IProduct,
  IProductListProps,
  ICardProps,
  IProductProps,
  IProductCardProps,
  ICartContextType,
  IUserContextType,
  ILogin,
};
