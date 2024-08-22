import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3000;
export const POSTGRES_DATABASE: string =
  process.env.POSTGRES_DATABASE || "proyecto_m4_front";
export const POSTGRES_USER: string = process.env.POSTGRES_USER || "postgres";
export const POSTGRES_PASSWORD: string =
  process.env.POSTGRES_PASSWORD || "admin";
export const POSTGRES_HOST: string = process.env.POSTGRES_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
