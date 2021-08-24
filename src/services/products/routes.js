import { Router } from "express";

import * as productHandeler from "./handlers.js";

const productsRoutes = Router();

productsRoutes.get("/", productHandeler.list);

productsRoutes.get("/:product_id", productHandeler.single);

productsRoutes.put("/:product_id", productHandeler.update);

productsRoutes.delete("/:product_id", productHandeler.deleteproduct);

productsRoutes.post("/", productHandeler.create);

export default productsRoutes;
