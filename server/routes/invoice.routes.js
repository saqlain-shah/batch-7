import express from "express";
import {addInvoice , viewAllInvoice, viewSingleInvoice, deleteInvoice, updateInvoice} from "../controller/invoice.controller.js"
const router = express.Router();


router.get("/", viewAllInvoice);
router.get("/:id", viewSingleInvoice);
router.post("/", addInvoice);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);


// http://localhost:8000/api/Invoice/
// http://localhost:8000/api/Invoice/:id
// http://localhost:8000/api/Invoice/:id
// http://localhost:8000/api/Invoice/
// http://localhost:8000/api/Invoice/:id


export default router;
