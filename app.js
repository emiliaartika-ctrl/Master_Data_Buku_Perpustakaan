const express = require('express');
const path = require('path');
require('dotenv').config();

const bukuRoutes = require('./routes/bukuRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/buku', bukuRoutes);

app.get('/', (req, res) => {
    res.redirect('/buku');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});