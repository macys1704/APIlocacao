import { Router } from "express";
import { alterar, deletar, inserir, listar } from "../repository/clienteRepository.js"

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

endpoint.put('/alterar/:id', async (req, resp) =>{

try {

} catch (err) {
    resp.status(400).send({erro: })
}
    let cliente = req.body;
    let id = req.params.id;

    let resposta = await alterar(cliente);

}) 
export default endpoint;    