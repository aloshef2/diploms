const express = require("express");
const { getAll,  create,  deletes } = require('../controllers/category');
const router = express.Router();
const { auth } = require("../middleware/auth");



router.delete('/delete_by_id/:id', auth,(req, res) => {deletes(req, res) });

router.post('/uploadCategory', auth,(req, res) => { create(req, res) })

router.post('/getCategory', (req, res) => { getAll(req, res) })

module.exports = router;
