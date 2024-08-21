import { PORT } from "./src/config/envs";
import app from "./src/server";
import "reflect-metadata";
import { AppDataSource } from "./src/config/dataSource";
import { preLoadCategories } from "./src/helpers/preLoadCategories";
import { preLoadProducts } from "./src/helpers/preLoadProducts";

const initialize = async () => {
  console.log("Initializing server");
  await AppDataSource.initialize();
  console.log("Database initialized");
  await preLoadCategories();
  await preLoadProducts();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

initialize();
