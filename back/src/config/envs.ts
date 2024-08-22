import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3000;
export const POSTGRES_DATABASE: any = process.env.POSTGRES_DATABASE;
export const POSTGRES_USER: any = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD: any = process.env.POSTGRES_PASSWORD;
export const POSTGRES_HOST: any = process.env.POSTGRES_HOST;
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
