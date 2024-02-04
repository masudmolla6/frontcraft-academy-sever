const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;


// middlewar
app.use(cors());
app.use(express.json());

const courses = require("./data/courses.json");
const course = require("./data/course.json");

app.get("/", (req, res) => {
    res.send("Hello from FrontCraft Academy.");
})

app.get("/courses", (req, res) => {
    res.send(courses);
})

app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedTopics = course.filter(topics => parseInt(topics.id) === id);
    res.send(selectedTopics); 
})

app.get("/courses/topic/:id", (req, res) => {
    const id = req.params.id;
    const topic = course.find((details) => details.topics_id === id);
    res.send(topic);
})

app.listen(port, () => {
    console.log("Server Is Runing From port", port);
})