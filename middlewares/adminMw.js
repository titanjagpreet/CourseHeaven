const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_ADMIN_SECRET = process.env.JWT_USER_SECRET;

const adminMiddleware = (req, res, next) => {
    
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_ADMIN_SECRET);

    if(decoded){
        req.adminId = decoded.id;
        next();
    } else{

        return res.status(403).json({
            message: "You're not signed in!"
        });
    }
}

module.exports = {
    adminMiddleware,
}