const express = require('express');
const router = express.Router();

//Middleware

const authMiddleware = require('../middleware/auth.middleware');

//Controllers
const schoolController = require('../controllers/school.controller');

router.use(authMiddleware.isAuth);

router.get('/', schoolController.index);

router.get('/search', schoolController.search);

router.post('/', schoolController.createSchool)

router.get('/:id', schoolController.getById)

router.delete('/:id', schoolController.delete)

router.put('/:id', schoolController.update)

module.exports = router;