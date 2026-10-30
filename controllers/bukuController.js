const BukuModel = require('../models/bukuModel');

exports.index = async (req, res) => {
    try {
        const daftarBuku = await BukuModel.getAll();
        res.render('pages/index', { bukuList: daftarBuku }); // Diubah ke pages/index
    } catch (error) {
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.renderAddForm = (req, res) => {
    res.render('pages/add'); // Diubah ke pages/add
};

exports.create = async (req, res) => {
    try {
        await BukuModel.create(req.body);
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Gagal menambah data');
    }
};

exports.renderEditForm = async (req, res) => {
    try {
        const buku = await BukuModel.getById(req.params.id);
        if (!buku) return res.status(404).send('Buku tidak ditemukan');
        res.render('pages/edit', { buku }); // Diubah ke pages/edit
    } catch (error) {
        res.status(500).send('Terjadi kesalahan pada server');
    }
};

exports.update = async (req, res) => {
    try {
        await BukuModel.update(req.params.id, req.body);
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Gagal memperbarui data');
    }
};

exports.delete = async (req, res) => {
    try {
        await BukuModel.delete(req.params.id);
        res.redirect('/buku');
    } catch (error) {
        res.status(500).send('Gagal menghapus data');
    }
};