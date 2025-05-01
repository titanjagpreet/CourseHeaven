const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter  } = require('./routes/admin');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

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