import express from "express";
import {addProduct , viewAllProduct, viewSingleProduct, deleteProduct, updateProduct} from "../controller/product.controller"
const router = express.Router();


router.get("/", viewAllProduct);
router.get("/:id", viewSingleProduct);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


// http://localhost:8000/api/product/
// http://localhost:8000/api/product/:id
// http://localhost:8000/api/product/:id
// http://localhost:8000/api/product/
// http://localhost:8000/api/product/:id


export default router;
