const express = require('express');
const route = express.Router();

//Middleware

const authMiddleware = require('../middleware/auth.middleware');

//Controller
const schoolController = require('../controllers/school.controller');

route.get('/',authMiddleware.isAuth ,schoolController.index);

module.exports = route;