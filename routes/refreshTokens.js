var express = require("express");
var router = express.Router();
const refreshTokensHandler = require("./handler/refresh-tokens");

// Create Token
router.post("/", refreshTokensHandler.create);

// Get Token
router.get("/", refreshTokensHandler.getToken);

module.exports = router;
