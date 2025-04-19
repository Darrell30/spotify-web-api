const express = require("express");
const router = express.Router();
const userController = require("./user-controller");

router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser); 
router.get("/by-userid/:user_id", userController.getUserByUserId);


module.exports = router;
