import express from "express";
import {addProduct , viewAllProduct, viewSingleProduct, deleteProduct, updateProduct ,addMultipleProducts} from "../controller/product.controller.js"
import {verifyUser } from "../utils/verifyToken.js"
import {upload} from "../utils/multer.js"
const router = express.Router();


router.get("/" , viewAllProduct);
router.get("/:id", viewSingleProduct);
router.post("/", upload.array('images', 5),addProduct);
router.post("/", addMultipleProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


// http://localhost:8000/api/product/
// http://localhost:8000/api/product/:id
// http://localhost:8000/api/product/:id
// http://localhost:8000/api/product/
// http://localhost:8000/api/product/:id


export default router;
