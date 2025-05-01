const { Router } = require('express');

const userRouter = Router();
const { userModel } = require('../models/db');


userRouter.post("/signup", (req, res) => {
    res.json({
        message: "Signup endpoint"
    })
})

userRouter.post("/signin", (req, res) => {
    res.json({
        message: "Signin endpoint"
    })
})

userRouter.get("/purchases", (req, res) => {
    res.json({
        message: "Purchases endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}