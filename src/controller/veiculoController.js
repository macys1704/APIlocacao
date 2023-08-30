import { Router } from "express";
import { inserirveiculo } from "../repository/veiculoRepository.js"

let endpoint = Router();

endpoint.post('/inserir/veiculo', async (req, resp) => {
    try {
    const carro = req.body

    let dados = await inserirveiculo(carro)
    resp.send(dados)
    } catch (err) {
        resp.status(400).send({erro: err.message})
    }
})


export default endpoint