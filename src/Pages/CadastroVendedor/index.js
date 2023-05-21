import "../styleCadastro.css";
import { useState } from 'react';

function CadastroVendedor() {
    const [formDados, setDados] = useState({
        nome: '',
        telefone: '',
        email: '',
        dataNac: '',
        cep: '',
        cidade: '',
        bairro: '',
        logradouro: '',
        estado: '',
        numero: '',
        blocoTorre: '',
        apartamento: '',
        nomeCondominio: ''
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
                    setDados({
                        logradouro: logradouro.street,
                        cidade: logradouro.city,
                        estado: logradouro.state,
                        bairro: logradouro.neighborhood
                    });
                } else if (req.status === 404) {
                    alert("cep inválido");
                } else {
                    alert("Erro ao fazer a inquisição, tente novamente!");
                }
            }
        }
    }

    return (
        <div className="corpo">
            <div className="logoPreto"></div>
            <div className="cont">
                <h1>CADASTRO DE VENDEDOR</h1>
                <form >
                    <input id="nome" type="text" placeholder="Nome" value={formDados.nome} onChange={(e) => setDados((prevDados) => ({ ...prevDados, nome: e.target.value }))} />
                    <input id="telefone" type="tel" placeholder="Telefone" value={formDados.telefone} onChange={(e) => setDados((prevDados) => ({ ...prevDados, telefone: e.target.value }))} />
                    <input id="email" type="email" placeholder="E-mail" value={formDados.email} onChange={(e) => setDados((prevDados) => ({ ...prevDados, email: e.target.value }))} />
                    <input id="dataNac" type="date" placeholder="Data de Nacsimento" value={formDados.dataNac} onChange={(e) => setDados((prevDados) => ({ ...prevDados, dataNac: e.target.value }))} />
                    <input id="cep" type="text" maxlength="8" placeholder="Cep" onChange={(e) => setDados((prevDados) => ({ ...prevDados, cep: e.target.value }))} onBlur={buscarCep} />
                    <input id="cidade" type="text" placeholder="Cidade" value={formDados.cidade} onChange={(e) => setDados((prevDados) => ({ ...prevDados, cidade: e.target.value }))} />
                    <input id="bairro" type="text" placeholder="Bairro" value={formDados.bairro} onChange={(e) => setDados((prevDados) => ({ ...prevDados, bairro: e.target.value }))} />
                    <input id="logradouro" type="text" placeholder="Logradouro" value={formDados.logradouro} onChange={(e) => setDados((prevDados) => ({ ...prevDados, logradouro: e.target.value }))} />
                    <input id="estado" type="text" placeholder="Estado" value={formDados.estado} onChange={(e) => setDados((prevDados) => ({ ...prevDados, estado: e.target.value }))} />
                    <input id="numero" type="number" placeholder="Número" value={formDados.numero} onChange={(e) => setDados((prevDados) => ({ ...prevDados, numero: e.target.value }))} />
                    <input id="blocoTorre" type="text" placeholder="Bloco/Torre" value={formDados.blocoTorre} onChange={(e) => setDados((prevDados) => ({ ...prevDados, blocoTorre: e.target.value }))} />
                    <input id="apartamento" type="number" placeholder="Apartamento" value={formDados.apartamento} onChange={(e) => setDados((prevDados) => ({ ...prevDados, apartamento: e.target.value }))} />
                    <input id="nomeCondominio" type="text" placeholder="Qual o nome do seu condomínio" value={formDados.nomeCondominio} onChange={(e) => setDados((prevDados) => ({ ...prevDados, nomeCondominio: e.target.value }))} />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastroVendedor;
