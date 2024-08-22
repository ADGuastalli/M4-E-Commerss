import { DataSource } from "typeorm";
import {
  DB_PORT,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from "./envs";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: DB_PORT as unknown as number,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  synchronize: true,
  dropSchema: false,
  logging: false,
  entities: [User, Credential, Order, Product, Category],
  subscribers: [],
  migrations: [],
});
