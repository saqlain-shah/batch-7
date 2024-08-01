import express from "express";
import userController from "../controller/user.controller.js"
const router = express.Router();

// router.route('/addUser').post(userControler.AddUser)
router.get("/", userController.viewAllUser);
router.get("/:id", userController.viewSingleUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


// http://localhost:8000/api/User/
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id


export default router;
