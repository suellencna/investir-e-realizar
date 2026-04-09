// JavaScript source codeconst express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve todos os arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal → página hub
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota /upgrade → página de vendas
app.get('/upgrade', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upgrade', 'index.html'));
});

// Futuras rotas (ebooks, curso, etc.)
// app.get('/ebook-organizar', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'ebook-organizar', 'index.html'));
// });

// Qualquer rota não encontrada → redireciona pra home
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`🌐 Hub: http://localhost:${PORT}`);
    console.log(`💰 Upgrade: http://localhost:${PORT}/upgrade`);
});
