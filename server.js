const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/upgrade', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upgrade', 'index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log('');
    console.log('===========================================');
    console.log('  ✅ Servidor rodando com sucesso!');
    console.log('===========================================');
    console.log('');
    console.log('  🏠 Hub:     http://localhost:' + PORT);
    console.log('  💰 Upgrade: http://localhost:' + PORT + '/upgrade');
    console.log('');
});

