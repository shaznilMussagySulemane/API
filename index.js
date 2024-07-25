import express from 'express'
const app = express()
const PORT = 3333

app.get('/', (req, res) => {
    res.send('Olá Shaznil')
})

app.listen(PORT, () => {
    console.log('Servidor rodando com sucesso na porta ' + PORT);
})