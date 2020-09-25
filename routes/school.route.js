const express = require('express');
const router = express.Router();

//Middleware

const authMiddleware = require('../middleware/auth.middleware');

//Controller
const schoolController = require('../controllers/school.controller');

router.get('/', authMiddleware.isAuth , schoolController.index);

router.post('/', authMiddleware.isAuth, schoolController.createSchool)

module.exports = router;