import { Router } from "express";

import * as productHandeler from "./handlers.js";

const route = Router();

route.get("/", productHandeler.list);

route.get("/:author_id", productHandeler.single);

route.put("/:author_id", productHandeler.update);

route.delete("/:author_id", productHandeler.deleteproduct);

route.post("/", productHandeler.create);

export default route;
