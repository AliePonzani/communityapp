import "../styleCadastro.css";
import { useState } from 'react';


function CadastroMorador() {
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

    const enviarDados = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3333/cadastroUsuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDados),
          });
    
          const data = await response.json();
          if (data.success) {
            // Login válido
            console.log(data.user.nome);
          } else {
            // Login inválido
            alert("Erro de teste");
          }
        } catch (error) {
          console.error('Ocorreu um erro ao fazer login:', error);
        }
      };



    return (
        <div className="corpo">
            <div className="logoPreto"></div>
            <div className="cont">
                <h1>CADASTRO DE MORADOR</h1>
                <form onSubmit={enviarDados}>
                    <input id="nome" type="text" placeholder="Nome" value={formDados.nome} onChange={(e) => setDados((prevDados) => ({ ...prevDados, nome: e.target.value }))} required/>
                    <input id="telefone" type="tel" placeholder="Telefone" value={formDados.telefone} onChange={(e) => setDados((prevDados) => ({ ...prevDados, telefone: e.target.value }))} required/>
                    <input id="email" type="email" placeholder="E-mail" value={formDados.email} onChange={(e) => setDados((prevDados) => ({ ...prevDados, email: e.target.value }))} required/>
                    <input id="dataNac" type="date" placeholder="Data de Nacsimento" value={formDados.dataNac} onChange={(e) => setDados((prevDados) => ({ ...prevDados, dataNac: e.target.value }))} required/>
                    <input id="cep" type="text" maxlength="8" placeholder="Cep" onChange={(e) => setDados((prevDados) => ({ ...prevDados, cep: e.target.value }))} onBlur={buscarCep} required/>
                    <input id="cidade" type="text" placeholder="Cidade" value={formDados.cidade} onChange={(e) => setDados((prevDados) => ({ ...prevDados, cidade: e.target.value }))} required/>
                    <input id="bairro" type="text" placeholder="Bairro" value={formDados.bairro} onChange={(e) => setDados((prevDados) => ({ ...prevDados, bairro: e.target.value }))} required/>
                    <input id="logradouro" type="text" placeholder="Logradouro" value={formDados.logradouro} onChange={(e) => setDados((prevDados) => ({ ...prevDados, logradouro: e.target.value }))} required/>
                    <input id="estado" type="text" placeholder="Estado" value={formDados.estado} onChange={(e) => setDados((prevDados) => ({ ...prevDados, estado: e.target.value }))} required/>
                    <input id="numero" type="number" placeholder="Número" value={formDados.numero} onChange={(e) => setDados((prevDados) => ({ ...prevDados, numero: e.target.value }))} required/>
                    <input id="blocoTorre" type="text" placeholder="Bloco/Torre" value={formDados.blocoTorre} onChange={(e) => setDados((prevDados) => ({ ...prevDados, blocoTorre: e.target.value }))} required/>
                    <input id="apartamento" type="number" placeholder="Apartamento" value={formDados.apartamento} onChange={(e) => setDados((prevDados) => ({ ...prevDados, apartamento: e.target.value }))} required/>
                    <input id="nomeCondominio" type="text" placeholder="Qual o nome do seu condomínio" value={formDados.nomeCondominio} onChange={(e) => setDados((prevDados) => ({ ...prevDados, nomeCondominio: e.target.value }))} required/>
                    <input id="senha" type="password" placeholder="Senha" value={formDados.senha} onChange={(e) => setDados((prevDados) => ({ ...prevDados, senha: e.target.value }))} required/>
                    <button type="submit">Salvar</button> 
                </form>
            </div>
        </div>
    );
}

export default CadastroMorador;
