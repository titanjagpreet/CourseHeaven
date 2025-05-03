const { Router } = require('express');

const courseRouter = Router();
const { purchaseCourse, previewCourse } = require('../controllers/courseController');
const { userMiddleware } = require('../middlewares/userMw');

courseRouter.post("/purchase", userMiddleware, purchaseCourse);

courseRouter.get("/preview", previewCourse);

module.exports = {
    courseRouter: courseRouter
}