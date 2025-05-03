const { Router } = require('express');
const { signupUser, signinUser, createCourse, updateCourse, getAllCourses } = require('../controllers/adminController');
const { adminMiddleware } = require('../middlewares/adminMw');

const validateAdminSignup = require('../middlewares/validateAdminSignup');
const validateAdminSignin = require('../middlewares/validateAdminSignin');

const adminRouter = Router();

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup", validateAdminSignup, signupUser);

adminRouter.post("/signin", validateAdminSignin, signinUser);

adminRouter.post("/course", adminMiddleware, createCourse);

adminRouter.put("/course:id", adminMiddleware, updateCourse);

adminRouter.get("/course/bulk", adminMiddleware, getAllCourses);

module.exports = {
    adminRouter: adminRouter
}