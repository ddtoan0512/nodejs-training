require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const bodyParse = require('body-parser');

// DB Sequelize
const db = require('./models');

//Routes
const schoolRoute = require('./routes/school.route');
const authRoute = require('./routes/auth.route');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }))

app.use('/api', authRoute);

app.use('/api/school', schoolRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    console.log(`========================================== \n \n`);
})