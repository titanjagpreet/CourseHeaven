const { z } = require('zod');

const signinSchema = z.object({

    username: z
        .string()
        .min(4, "Username must be at least 4 characters")
        .max(20, "Username must be at most 20 characters"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be at most 20 characters")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%*?&#$^])[A-Za-z\d@!%*?&#$^]{8,20}$/,
            "Password must include at least one uppercase, one lowercase, one number, and one special character (@!%*?&)"
        ),
});

module.exports = (req, res, next) => {
    try{
        signinSchema.parse(req.body);
        next();
    }
    catch (error) {
        res.status(400).json({
            error: error.message || "Something went wrong during signin."
        });
    }
};