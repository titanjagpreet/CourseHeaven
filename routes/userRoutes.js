const { Router } = require('express');
const { signupUser, signinUser } = require('../controllers/userController');

const validateUserSignup = require('../middlewares/validateUserSignup');
const validateUserSignin = require('../middlewares/validateUserSignin');

const userRouter = Router();
const { userModel } = require('../models/db');


userRouter.post("/signup", validateUserSignup, signinUser);

userRouter.post("/signin", validateUserSignin, signinUser);

userRouter.get("/purchases", );

module.exports = {
    userRouter: userRouter
}