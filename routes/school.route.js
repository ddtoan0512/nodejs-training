const express = require('express');
const router = express.Router();

//Middleware

const authMiddleware = require('../middleware/auth.middleware');

//Controllers
const schoolController = require('../controllers/school.controller');

router.get('/', schoolController.index);

router.post('/', schoolController.createSchool)

router.get('/:id', schoolController.getById)

module.exports = router;