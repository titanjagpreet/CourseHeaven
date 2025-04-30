const express = require('express');
const cors = require('cors');


const router = express.Router();

router.use(cors());

router.post("/user/signup", (req, res) => {
    res.json({
        message: "Signup endpoint"
    })
})

router.post("/user/signin", (req, res) => {
    res.json({
        message: "Signin endpoint"
    })
})

router.post("/course/purchase", (req, res) => {
    res.json({
        message: "Purchase Courses endpoint"
    })
})

router.get("/courses", (req, res) => {
    res.json({
        message: "View Courses endpoint"
    })
})

router.get("/user/purchases", (req, res) => {
    res.json({
        message: "Purchases endpoint"
    })
})

