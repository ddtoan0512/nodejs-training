const express = require('express');

const authMiddleware = require('../middleware/auth.middleware');

const gradeController = require('../controllers/grade.controller');

const router = express.Router();

// router.use(authMiddleware.isAuth);

router.get('/', gradeController.index);

router.get('/:id', gradeController.index);

router.post('/', gradeController.createGrade);

router.delete('/:id', gradeController.delete);

router.put('/:id', gradeController.update);

module.exports = router;