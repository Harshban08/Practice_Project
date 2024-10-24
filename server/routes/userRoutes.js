const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/userControllers");

//Route for use registration
Router.post("/api/register",registerUser);

//Router for user login
Router.post("/api/login",loginUser);

module.exports = router;