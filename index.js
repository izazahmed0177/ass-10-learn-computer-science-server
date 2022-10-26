const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())

const courses = require('./data/courses.json');
const coursesDetail = require('./data/coursesDetail.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.get('/courses', (req, res) => {
    res.send(courses)
});


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = coursesDetail.find(course => course.course_id === id);
    res.send(selectCourse);
});

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;

    const checkoutID = coursesDetail.find(course => course.course_id === id);
    res.send(checkoutID);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})