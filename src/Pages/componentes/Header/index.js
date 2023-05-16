import LoguinMorador from '../../Loguin_Morador';
import LoguinVendedor from '../../Loguin_Vendedor';
import CadastroMorador from '../../CadastroMorador';
import './index.css';

function Header() {
    return (
        <html>
            <div id="logoPreto"></div>
            <div className="container">
                <LoguinMorador></LoguinMorador>
                <LoguinVendedor></LoguinVendedor>
                <CadastroMorador></CadastroMorador>
            </div > {/*DIV container */}
        </html >
    )
}
export default Header;