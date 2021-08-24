import { Router } from "express";

import productsRoutes from "./products/routes.js";

const route = Router();

route.use("/products", productsRoutes);

export default route;
