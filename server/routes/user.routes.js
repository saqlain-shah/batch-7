import express from "express";
import userControler from "../controller/user.controller.js"
const router = express.Router();

router.route('/addUser').post(userControler.AddUser)
router.get("/", userControler.viewAllUser);
router.get("/:id", userControler.viewSingleUser);
router.put("/:id", userControler.updateUser);
router.delete("/:id", userControler.deleteUser);


// http://localhost:8000/api/User/
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id
// http://localhost:8000/api/User/:id


export default router;
