const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/bukuController');

router.get('/', bukuController.index);
router.get('/tambah', bukuController.renderAddForm);
router.post('/tambah', bukuController.create);
router.get('/edit/:id', bukuController.renderEditForm); // Rute dinamis /buku/edit/:id
router.post('/edit/:id', bukuController.update);
router.post('/hapus/:id', bukuController.delete);

module.exports = router;