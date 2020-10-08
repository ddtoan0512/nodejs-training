const express = require('express');
const router = express.Router();

const controller = require('../controllers/homeroom_classes.controller');

router.get('/', controller.index);

router.get('/:id', controller.findById);

router.post('/', controller.store);

router.delete('/:id', controller.delete);

router.put('/:id', controller.update);

module.exports = router;