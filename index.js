import express from 'express'

const app = express()

app.use(express.json())

const PORT = 3333

app.get('/', (req, res) => {
    return res.json({message: 'Server is up!'})
})

app.post('/teste', (req, res) => {
    const {name, date} = req.body
    return res.json({name, date})
})

app.listen(PORT, () => {
    console.log('Servidor rodando com sucesso na porta ' + PORT);
})