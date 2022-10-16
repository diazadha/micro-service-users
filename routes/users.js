var express = require("express");
var router = express.Router();
const usersHandler = require("./handler/users");

/* Register. */
router.post("/register", usersHandler.register);

// Login
router.post("/login", usersHandler.login);

// Update
router.put("/:id", usersHandler.update);

// Get User By Id
router.get("/:id", usersHandler.getUser);

// Get All User
router.get("/", usersHandler.getAllUser);

// Logout
router.post("/logout", usersHandler.logout);

module.exports = router;
