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
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }))

app.use('/api', authRoute);

app.use('/api/schools', schoolRoute);
app.use('/api/grades', gradeRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(`==================================================== \n \n`);
})
