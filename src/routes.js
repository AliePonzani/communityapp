import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaMorador from './Pages/Tela_Morador';
import TelaVendedor from './Pages/Tela_Vendedor';
import LoguinMorador from './Pages/Loguin_Morador';
import LoguinVendedor from './Pages/Loguin_Vendedor';
import Header from './Pages/componentes/Header';
import CadastroMorador from './Pages/CadastroMorador';

function RouterApp() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/TelaMorador" element={<TelaMorador />} />
                    <Route path="/TelaVendedor" element={<TelaVendedor />} />
                    <Route path="/LoguinMorador" element={<LoguinMorador />} />
                    <Route path="/LoguinVendedor" element={<LoguinVendedor />} />
                    <Route path='/CadastroMorador' element={<CadastroMorador />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RouterApp;