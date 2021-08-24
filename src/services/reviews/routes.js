import { Router } from "express";

import * as reviewHandeler from "./handlers.js";

const reviewsRoutes = Router();

reviewsRoutes.get("/", reviewHandeler.list);
reviewsRoutes.post("/", reviewHandeler.create);
reviewsRoutes.put("/:reviewId", reviewHandeler.upgraded);
reviewsRoutes.delete("/:reviewId", reviewHandeler.deleteReview);

export default reviewsRoutes;
