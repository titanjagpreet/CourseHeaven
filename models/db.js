require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const MONGO_URI = process.env.MONGO_URI;
async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ Connected to MongoDB!");
    } catch (err) {
        console.error("❌ Failed to connect to MongoDB:", err);
    }
}

// User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "Password must be of at least 6 characters"]
    }
}, {
    timestamps: true
   }
);

// Admin Schema
const AdminSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [15, "First Name must be less than 15 characters"]
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [15, "First Name must be less than 15 characters"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [6, "Password must be of at least 6 characters"]
    }
}, {
    timestamps: true
   }
);

// Course Schema
const CourseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [100, "Must be less than 100 characters"]
    },
    price: {
        type: Number,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
        trim: true,
    },
    creatorId: {
        type: ObjectId,
        ref: 'Admin'
    }
}, {
    timestamps: true
   }
);

// Purchase Schema
const PurchaseSchema = new Schema({
    courseId: {
        type: ObjectId,
        ref: 'Course',
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
   }
);

// Models
const userModel = mongoose.model('User', UserSchema);
const adminModel = mongoose.model('Admin', AdminSchema);
const courseModel = mongoose.model('Course', CourseSchema);
const purchaseModel = mongoose.model('Purchase', PurchaseSchema);

// Exports
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
    connectDB
}