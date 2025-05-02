const z = require('zod');

const signupSchema = z.object({

    name: z
        .string()
        .min(3, "Must be at least 3 characters")
        .max(20, "Must be below 20 characters"),

    email: z
        .string()
        .email("Invalid email address")
        .max(40, "Must be below 40 characters"),

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
    try {
        signupSchema.parse(req.body);
        next();
    } catch (error) {

        res.status(400).json({
            error: error.errors[0].message
        });
    }
};