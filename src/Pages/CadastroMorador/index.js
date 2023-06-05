import "../styleCadastro.css";
import { useState } from 'react';


function CadastroMorador() {
    const [formDados, setDados] = useState({
        nome: '',
        telefone: '',
        email: '',
        dataNasc: '',
        cep: '',
        cidade: '',
        bairro: '',
        logradouro: '',
        estado: '',
        numero: '',
        blocoTorre: '',
        apartamento: '',
        nomeCondominio: '',
        senha: ''
    });

    function buscarCep() {
        const cep = formDados.cep;

        if (cep !== "") {
            let url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let logradouro = JSON.parse(req.response);
                    setDados(prevDados => ({
                        ...prevDados,
                        logradouro: logradouro.street,
                        cidade: logradouro.city,
                        estado: logradouro.state,
                        bairro: logradouro.neighborhood
                    }));
                } else if (req.status === 404) {
                    alert("cep inválido");
                } else {
                    alert("Erro ao fazer a inquisição, tente novamente!");
                }
            }
        }
    }

    /* async function enviarEndereco(e) {
        e.preventDefault();

        // Obtém os dados do logradouro, cidade, estado e bairro
        const data = formDados

        // Cria um objeto com os dados a serem enviados para a API
        const dados = {
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            dataNasc: data.dataNasc,
            cep: data.cep,
            cidade: data.cidade,
            bairro: data.bairro,
            logradouro: data.logradouro,
            estado: data.estado,
            numero: data.numero,
            blocoTorre: data.blocoTorre,
            apartamento: data.apartamento,
            nomeCondominio: data.nomeCondominio,
            senha: data.senha
        };

        // Constrói a URL para a requisição POST
        const url = "http://localhost:3333/cadastroMorador";

        // Cria uma nova instância de XMLHttpRequest
        const req = new XMLHttpRequest();

        // Abre uma conexão HTTP POST para a URL especificada
        req.open("POST", url);

        // Define o cabeçalho da requisição para indicar que os dados serão enviados no formato JSON
        req.setRequestHeader("Content-Type", "application/json");

        // Envia a requisição para o servidor, convertendo o objeto de dados em JSON
        req.send(JSON.stringify(dados));

        // Define uma função para ser executada quando a resposta da requisição é carregada
        req.onload = function () {
            // Verifica o status da resposta
            if (req.status === 201) {
                // Exibe uma mensagem informando que os dados foram enviados com sucesso
                alert("Dados enviados com sucesso!");
            } else {
                // Exibe uma mensagem informando que ocorreu um erro na requisição
                alert("Erro ao enviar os dados, tente novamente!");
            }
        }
    } */




    async function enviarDados(event) {

        const data = formDados

        // Cria um objeto com os dados a serem enviados para a API
        const dados = {
            nome: data.nome,
            telefone: data.telefone,
            email: data.email,
            dataNasc: data.dataNasc,
            cep: data.cep,
            cidade: data.cidade,
            bairro: data.bairro,
            logradouro: data.logradouro,
            estado: data.estado,
            numero: data.numero,
            blocoTorre: data.blocoTorre,
            apartamento: data.apartamento,
            nomeCondominio: data.nomeCondominio,
            senha: data.senha
        };
        event.preventDefault();

        if (formDados.email === "") {
            alert("email vazio")
        } else {
            alert(formDados.email)
        }
        try {
            const response = await fetch('http://localhost:3333/cadastroMorador', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados)
            });
            const aux = response.json();
            console.log(response);
            console.log(aux);
            console.table(formDados);
        } catch {
            console.error('Ocorreu um erro ao fazer login:');
        }
    };



    return (
        <div className="corpo">
            <div className="logoPreto"></div>
            <div className="cont">
                <h1>CADASTRO DE MORADOR</h1>
                <form onSubmit={enviarDados}>
                    <input id="nome" type="text" placeholder="Nome" value={formDados.nome} onChange={(e) => setDados({ ...formDados, nome: e.target.value })} />
                    <input id="telefone" type="text" placeholder="Telefone" value={formDados.telefone} onChange={(e) => setDados({ ...formDados, telefone: e.target.value })} />
                    <input id="email" type="email" placeholder="E-mail" value={formDados.email} onChange={(e) => setDados({ ...formDados, email: e.target.value })} />
                    <input id="dataNasc" type="date" placeholder="Data de Nascimento" value={formDados.dataNasc} onChange={(e) => setDados({ ...formDados, dataNasc: e.target.value })} />
                    <input id="cep" type="text" placeholder="Cep" maxLength={8} value={formDados.cep} onChange={(e) => setDados({ ...formDados, cep: e.target.value })} onBlur={buscarCep} />
                    <input id="cidade" type="text" placeholder="Cidade" value={formDados.cidade} onChange={(e) => setDados({ ...formDados, cidade: e.target.value })} />
                    <input id="bairro" type="text" placeholder="Bairro" value={formDados.bairro} onChange={(e) => setDados({ ...formDados, bairro: e.target.value })} />
                    <input id="logradouro" type="text" placeholder="Logradouro" value={formDados.logradouro} onChange={(e) => setDados({ ...formDados, logradouro: e.target.value })} />
                    <input id="estado" type="text" placeholder="Estado" value={formDados.estado} onChange={(e) => setDados({ ...formDados, estado: e.target.value })} />
                    <input id="numero" type="number" placeholder="Número" value={formDados.numero} onChange={(e) => setDados({ ...formDados, numero: e.target.value })} />
                    <input id="blocoTorre" type="number" placeholder="Bloco/Torre" value={formDados.blocoTorre} onChange={(e) => setDados({ ...formDados, blocoTorre: e.target.value })} />
                    <input id="apartamento" type="number" placeholder="Apartamento" value={formDados.apartamento} onChange={(e) => setDados({ ...formDados, apartamento: e.target.value })} />
                    <input id="nomeCondominio" type="text" placeholder="Qual o nome do seu condomínio" value={formDados.nomeCondominio} onChange={(e) => setDados({ ...formDados, nomeCondominio: e.target.value })} />
                    <input id="senha" type="text" placeholder="Senha" value={formDados.senha} onChange={(e) => setDados({ ...formDados, senha: e.target.value })} />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastroMorador;
