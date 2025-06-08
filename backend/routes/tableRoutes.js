const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');

router.get('/tables', tableController.getTables);
router.patch('/tables/:id', tableController.updateTableStatus);

module.exports = router;