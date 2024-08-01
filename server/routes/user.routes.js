import express from "express";
import {viewAllUser, viewSingleUser, deleteUser, updateUser} from "../controller/user.controller.js"
const router = express.Router();


router.get("/", viewAllUser);
router.get("/:id", viewSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


// http://localhost:8000/api/User/
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id


export default router;
