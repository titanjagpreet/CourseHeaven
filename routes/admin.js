const { Router } = require('express');

const adminRouter = Router();

// adminRouter.use(adminMiddleware);

adminRouter.post("/create", (req, res) => {
    res.json({
        message: "Create course endpoint"
    });
});

adminRouter.put("/create", (req, res) => {
    res.json({
        message: "Edit course endpoint"
    });
});

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "Get all of your courses endpoint"
    });
});

module.exports = {
    adminRouter: adminRouter
}