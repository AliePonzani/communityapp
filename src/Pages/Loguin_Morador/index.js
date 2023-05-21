import { Link } from "react-router-dom";
import '../style.css';
import './loginMorador.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoguinMorador() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function validarDados() {
        const dados = { usuario, senha };
        const emailValido = 'teste@teste.com';
        const senhaValida = '12345';
        
        if (dados.usuario === emailValido && dados.senha === senhaValida) {
            alert('Usúario e/ou Senha do MORADOR são válidos');
        }
        else {
            alert('Usúario e/ou Senha do MORADOR são inválidos');
        }
    }


    return (
        <div>
            <div className="logoBranco"></div>
            <div className="loguinInicial">
                <div className="botoes">
                    <button className="clienteMorador" to="/LoguinMorador">MORADOR</button>
                    <Link className="vendedorMorador" to="/LoguinVendedor">VENDEDOR</Link>
                </div>
                <h4 className="textoLoguin">Olá!<br />Seja bem vindo de volta</h4>
                <p className="texto2">Faça o loguin agora</p>
                <input class="usuario" type="email" placeholder="Usarname" value={usuario} onChange={e => setUsuario(e.target.value)}></input><br />
                <input class="senha" type="password" placeholder="Password" value={senha} onChange={e => setSenha(e.target.value)}></input><br />
                <button class="esqueceuSenha">Esqueceu a senha?</button><br />
                <button class="loguin" onClick={validarDados}>Loguin</button><br />
                <div>
                    <button className="criarConta" type="button" onClick={e => {navigate('/CadastroMorador')}}>Criar conta</button>
                </div>
            </div > {/*DIV loguinInicial */}
        </div>
    )
}
export default LoguinMorador;