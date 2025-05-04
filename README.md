# CourseHeaven

---

# 📚 CourseHeaven - Learning & Course Management Platform

A full-stack backend server built with **Node.js**, **Express**, and **MongoDB** for managing users, admins, and course content. This API supports authentication, authorization, course preview, purchase, and secure admin-level content creation and management.

---

## 🚀 Features

- ✅ User & Admin Signup/Login with validation
- 🔐 JWT-based Authentication & Middleware Protection
- 🎓 Admins can create and update course content (including videos)
- 💰 Users can preview and purchase courses (Payment gateway integration ready)
- 📦 Purchase history for users
- 📁 Modular code structure (controllers, routes, middlewares, models)

---

## 🗂️ Project Structure

├── controllers/             # Request handlers

│   ├── adminController.js

│   ├── courseController.js

│   └── userController.js

│

├── middlewares/            # Middlewares for auth and validation

│   ├── adminMw.js

│   ├── rateLimiter.js

│   ├── userMw.js

│   ├── validateAdminSignin.js

│   ├── validateAdminSignup.js

│   ├── validateUserSignin.js

│   └── validateUserSignup.js

│

├── models/                 # Mongoose schemas

│   └── db.js

│

├── routes/                 # Express routes

│   ├── adminRoutes.js

│   ├── courseRoutes.js

│   └── userRoutes.js

│

├── .env                    # Environment variables

├── .env.example            # Template for environment variables

├── .gitignore

├── package.json

├── README.md

└── server.js               # Entry point

---

## 🔐 API Authentication

- JWT-based with secret keys stored in `.env`
- Middleware functions (`adminMw.js`, `userMw.js`) protect restricted routes

---

## 📦 Routes Overview

### 👤 User Routes

| Method | Endpoint | Middleware | Description |
| --- | --- | --- | --- |
| POST | `/signup` | validateUserSignup | Register a new user |
| POST | `/signin` | validateUserSignin | Login user and get token |
| GET | `/purchases` | userMiddleware | View purchased courses |

### 🎓 Course Routes

| Method | Endpoint | Middleware | Description |
| --- | --- | --- | --- |
| POST | `/purchase` | userMiddleware | Purchase a course (mock payment) |
| GET | `/preview` | - | Public course preview |

### 🛠️ Admin Routes

| Method | Endpoint | Middleware | Description |
| --- | --- | --- | --- |
| POST | `/signup` | validateAdminSignup | Register new admin |
| POST | `/signin` | validateAdminSignin | Login admin and get token |
| POST | `/course` | adminMiddleware | Create a new course |
| PUT | `/course/:id` | adminMiddleware | Update existing course |
| GET | `/course/bulk` | adminMiddleware | Get all courses created by admin |

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **ZOD for Input Validation**
- **JWT Authentication**
- **Bcrypt for Password Hashing**
- **dotenv for Config Management**

---

## 🧪 Running the Project

### 1. Clone the repo

```bash
git clone <https://github.com/titanjagpreet/CourseHeaven.git>
cd CourseHeaven
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory using `.env.example` as a template:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_USER_SECRET=your_user_jwt_secret
JWT_ADMIN_SECRET=your_admin_jwt_secret
```

### 4. Start the Server

```bash
npm run start
```

Server runs on `http://localhost:5000` (or your specified port).

---

## 📌 To-Do / Future Features

- 🧾 Integrate Stripe or Razorpay for real payments
- 🎥 Upload & host real video content (e.g. AWS S3, Cloudinary)
- ✍️ Admin course editing dashboard (frontend)
- 📊 Admin analytics (sales, views)
- ✅ Use cookies instead of JWT for authentication
- 🔧 Frontend in EJS (low priority)
- ⚛️ Frontend in **React** for better UI/UX and SPA functionality

---

## 🤝 Contributing

PRs and suggestions are welcome! If you find a bug or want a feature, feel free to open an issue.

---

## 📄 License

This project is licensed under the [MIT License](https://chatgpt.com/c/LICENSE).

---

## 👨‍💻 Author

**Jagpreet Singh** – [@titanjagpreet](https://github.com/yourGitHub)
