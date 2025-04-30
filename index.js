const express = require('express');
const cors = require('cors');
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/user/signup", (req, res) => {
    res.json({
        message: "Signup endpoint"
    })
})

app.post("/user/signin", (req, res) => {
    res.json({
        message: "Signin endpoint"
    })
})

app.post("/course/purchase", (req, res) => {
    res.json({
        message: "Purchase Courses endpoint"
    })
})

app.get("/courses", (req, res) => {
    res.json({
        message: "View Courses endpoint"
    })
})

app.get("/user/purchases", (req, res) => {
    res.json({
        message: "Purchases endpoint"
    })
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}...`);
}).on('error', (err) => {
    console.log(`Error occured: ${err.message}`);
});