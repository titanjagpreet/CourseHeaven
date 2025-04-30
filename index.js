const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const cors = require('cors');
const port = process.env.PORT;

const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}...`);
}).on('error', (err) => {
    console.log(`Error occured: ${err.message}`);
});