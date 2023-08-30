import conexao from "./connection.js";

export async function listar() {
    
    let comando = `select * from tb_cliente`;

    let resp = await conexao.query(comando)
    let dados = resp[0]
    return dados

}

export async function inserir(cliente) {
    let comando = `insert into tb_cliente (nm_cliente, nm_email, nr_cpf, nm_cnh, nr_telefone) values (?, ?, ?, ?, ?)`;

    let resp = await conexao.query(comando, [cliente.nome, cliente.email, cliente.cpf, cliente.cnh, cliente.telefone]) 
    let dados = resp[0]

    cliente.id = dados.insertId

    return cliente;
}

export async function deletar(id) {
    const comando = `delete from tb_cliente where id_cliente = ?`
    let [resposta] = await conexao.query(comando, [id])

    return resposta;



}