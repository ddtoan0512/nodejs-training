const express = require('express');

const router = express.Router();

const studentController = require('../controllers/student.controller');

router.get('/', studentController.index);

router.get('/:id', studentController.getById);

router.post('/', studentController.store);

router.delete('/', studentController.delete);

router.put('/', studentController.update);

module.exports = router;