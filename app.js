require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 6969;
const moment = require('moment');

const bodyParse = require('body-parser');

// DB Sequelize
const db = require('./models');

//Routes
const authRoute = require('./routes/auth.route');
const schoolRoute = require('./routes/school.route');
const gradeRoute = require('./routes/grade.route');
const homeroomClassRoute = require('./routes/homeroom_classes.route');
const studentRoute = require('./routes/student.route');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }))

app.use('/api', authRoute);

app.use('/api/schools', schoolRoute);
app.use('/api/grades', gradeRoute);
app.use('/api/homeroom_class', homeroomClassRoute);
app.use('/api/students', studentRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(`==================================================== \n \n`);
})
