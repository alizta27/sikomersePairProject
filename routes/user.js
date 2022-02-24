const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.showProfile);
router.get("/profile/add", UserController.addProfile);
router.post("/profile/add", UserController.postProfile);

router.get("/profile/edit/:id", UserController.formProfile);
router.post("/profile/edit/:id", UserController.postEditProfile);

router.get("/profile/delete/:id", UserController.deleteProfile);

module.exports = router;