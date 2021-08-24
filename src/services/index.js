import { Router } from "express";

import productsRoutes from "./products/routes.js";
import reviewsRoutes from "./reviews/routes.js";

const route = Router();

route.use("/products", productsRoutes);
route.use("/reviews", reviewsRoutes);

export default route;
