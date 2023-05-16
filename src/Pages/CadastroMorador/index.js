import "./style.css";
import { useState } from "react";

function CadastroMorador() {
    
    const [cep, setCep] = useState('');

    function buscarCep() {
        const dados = cep;
        
        if (dados !== "") {
            let url = `https://brasilapi.com.br/api/cep/v1/${dados}`;
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    let logradouro = JSON.parse(req.response);
                    document.getElementById("logradouro").value = logradouro.street;
                    document.getElementById("cidade").value = logradouro.city;
                    document.getElementById("estado").value = logradouro.state;
                    document.getElementById("bairro").value = logradouro.neighborhood;
                } else if (req.status === 404) {
                    alert("cep inválido");
                } else {
                    alert("Erro ao fazer a inquisição, tente novamente!");
                }
            }
        }
    }

    return (
        <div>
            <div class="cont">
                <h1>CADASTRO DE MORADOR</h1>
                <form>
                    <input id="nome" type="text" placeholder="Nome" />
                    <input id="telefone" type="tel" placeholder="Telefone" />
                    <input id="email" type="email" placeholder="E-mail" />
                    <input id="dataNac" type="date" placeholder="Data de Nacsimento" />
                    <input id="cep" type="text" maxlength="8" placeholder="Cep" onChange={e => setCep(e.target.value)} onBlur={buscarCep}/>
                    <input id="cidade" type="text" placeholder="Cidade" />
                    <input id="bairro" type="text" placeholder="Bairro" />
                    <input id="logradouro" type="text" placeholder="Logradouro" />
                    <input id="estado" type="text" placeholder="Estado" />
                    <input id="numero" type="number" placeholder="Número" />
                    <input id="blocoTorre" type="text" placeholder="Bloco/Torre" />
                    <input id="apartamento" type="number" placeholder="Apartamento" />
                    <input id="nomeCondominio" type="text" placeholder="Qual o nome do seu condomínio" />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    )
}
export default CadastroMorador;