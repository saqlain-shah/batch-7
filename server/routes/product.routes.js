import express from "express";
import {addProduct , viewAllProduct, viewSingleProduct, deleteProduct, updateProduct} from "../controller/product.controller.js"
import {verifyUser } from "../utils/verifyToken.js"
const router = express.Router();


router.get("/", verifyUser , viewAllProduct);
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
