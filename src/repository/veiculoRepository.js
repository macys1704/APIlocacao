import conexao from "./connection.js";

export async function inserirveiculo(veiculo) {
    let comando = `insert into tb_veiculo (nm_modelo, nm_marca, nr_ano, ds_placa) values (?, ?, ?, ?)`;

    let resp = await conexao.query(comando, [veiculo.modelo, veiculo.marca, veiculo.ano, veiculo.placa]) 
    let dados = resp[0]

    veiculo.id = dados.insertId
    return veiculo

}   