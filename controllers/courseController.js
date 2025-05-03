const { purchaseModel, courseModel } = require('../models/db');

const purchaseCourse = async (req, res) => {

    try {

        const userId = req.userId;
        const { courseId } = req.body.courseId;

        const course = await courseModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        const alreadyPurchased = await purchaseModel.findOne({ userId, courseId });
        if (alreadyPurchased) {
            return res.status(400).json({ message: "Course already purchased" });
        }

        // Need to check if User actually paid the price

        await purchaseModel.create({
            userId,
            courseId
        });

        res.json({
            message: "You've successfully bought the content",
            courseId
        });
    } catch (error) {

        res.status(500).json({ error: error.message || "Something went wrong" });

    }
}

const previewCourse = async (req, res) => {

    try {
        const courses = await courseModel.find({}); // Fetch all courses

        res.status(200).json({
            courses
        });
    } catch (error) {
        res.status(500).json({
            error: error.message || "Failed to fetch courses"
        });
    }

}

module.exports = {
    purchaseCourse,
    previewCourse
}