const { Router } = require('express');
const { signupUser, signinUser } = require('../controllers/adminController');

const validateAdminSignup = require('../middlewares/validateAdminSignup');
const validateAdminSignin = require('../middlewares/validateAdminSignin');

const adminRouter = Router();
const { adminModel } = require('../models/db');

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup", validateAdminSignup, signupUser);

adminRouter.post("/signin", validateAdminSignin, signinUser);

adminRouter.post("/create", );

adminRouter.put("/create", );

adminRouter.get("/course/bulk", );

module.exports = {
    adminRouter: adminRouter
}