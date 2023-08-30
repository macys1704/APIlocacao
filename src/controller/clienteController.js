import { Router } from "express";
import { deletar, inserir, listar } from "../repository/clienteRepository.js"

let endpoint = Router()

endpoint.get('/listar', async (req, resp) => {
    let dados = await listar()
    resp.send(dados)
})

endpoint.post('/inserir', async (req, resp) => {
    let cliente = req.body

    let dados = await inserir(cliente)
    resp.send(dados)

})

endpoint.delete('/delete', async (req, resp) => {
    const id = req.query.id
    const resposta = deletar(id)
    resp.send('id da tabela apagado')
})

export default endpoint;    