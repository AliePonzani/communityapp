import LoguinMorador from '../../Loguin_Morador';
import LoguinVendedor from '../../Loguin_Vendedor';
import './index.css';

function Header() {
    return (
        <html>
            <div id="logoPreto"></div>
            <div className="container">
                <div className='loginMorador'>
                    <LoguinMorador/>
                </div>
                <div className='loginVendedor'>
                    <LoguinVendedor/>
                </div>
            </div > {/*DIV container */}
        </html >
    )
}
export default Header;