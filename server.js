const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { userRouter } = require('./routes/userRoutes');
const { courseRouter } = require('./routes/courseRoutes');
const { adminRouter  } = require('./routes/adminRoutes');
const { connectDB } = require('./models/db');

const port = process.env.PORT;
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}...`);
}).on('error', (err) => {
    console.log(`Error occured: ${err.message}`);
});