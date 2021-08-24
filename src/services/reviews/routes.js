import { Router } from "express";

import * as reviewHandeler from "./handlers.js";

const reviewsRoutes = Router();

reviewsRoutes.get("/", reviewHandeler.list);
reviewsRoutes.post("/", reviewHandeler.create);


export default reviewsRoutes;
