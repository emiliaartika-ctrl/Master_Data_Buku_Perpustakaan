const db = require('../config/db');

const BukuModel = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM buku ORDER BY id DESC');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM buku WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (data) => {
        const { judul, penulis, deskripsi, stok, kategori, tanggal_terbit } = data;
        const [result] = await db.query(
            'INSERT INTO buku (judul, penulis, deskripsi, stok, kategori, tanggal_terbit) VALUES (?, ?, ?, ?, ?, ?)',
            [judul, penulis, deskripsi, stok, kategori, tanggal_terbit]
        );
        return result.insertId;
    },

    update: async (id, data) => {
        const { judul, penulis, deskripsi, stok, kategori, tanggal_terbit } = data;
        await db.query(
            'UPDATE buku SET judul = ?, penulis = ?, deskripsi = ?, stok = ?, kategori = ?, tanggal_terbit = ? WHERE id = ?',
            [judul, penulis, deskripsi, stok, kategori, tanggal_terbit, id]
        );
    },

    delete: async (id) => {
        await db.query('DELETE FROM buku WHERE id = ?', [id]);
    }
};

module.exports = BukuModel;