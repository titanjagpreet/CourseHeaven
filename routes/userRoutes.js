const { Router } = require('express');
const { signupUser, signinUser, getAllPurchases } = require('../controllers/userController');
const { userMiddleware } = require('../middlewares/userMw');

const validateUserSignup = require('../middlewares/validateUserSignup');
const validateUserSignin = require('../middlewares/validateUserSignin');

const userRouter = Router();
const { userModel } = require('../models/db');


userRouter.post("/signup", validateUserSignup, signupUser);

userRouter.post("/signin", validateUserSignin, signinUser);

userRouter.get("/purchases", userMiddleware, getAllPurchases);

module.exports = {
    userRouter: userRouter
}