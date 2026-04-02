import express from "express";
const router = express.Router();

import ProductsController from "../controllers/ProductController.js";

router.get("/create", ProductsController.createProduct);
router.post("/create", ProductsController.createProductPost);
// router.post("/remove/:id", ProductsController.removeProduct);
// router.post("/edit", ProductsController.editProductPost);
// router.get("/edit/:id", ProductsController.editProduct);
router.get("/:id", ProductsController.getProduct);
router.get("/", ProductsController.showProducts);

export default router;
