const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Página principal = Consultoria
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'consultoria', 'index.html'));
});

// Sobre / Hub (antiga home)
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Mentoria
app.get('/mentoria', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mentoria', 'index.html'));
});

// Upgrade Financeiro
app.get('/upgrade', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upgrade', 'index.html'));
});

// Redirect /consultoria para / (evita duplicidade)
app.get('/consultoria', (req, res) => {
    res.redirect('/');
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
    console.log('  🏠 Home (Consultoria): http://localhost:' + PORT);
    console.log('  📋 Sobre:              http://localhost:' + PORT + '/sobre');
    console.log('  🎯 Mentoria:           http://localhost:' + PORT + '/mentoria');
    console.log('  💰 Upgrade:            http://localhost:' + PORT + '/upgrade');
    console.log('');
});
