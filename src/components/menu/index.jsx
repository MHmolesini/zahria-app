import { Link, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../../pages/aboutUs/index'
import { Faq } from '../../pages/faq/index'


export const Menu = () => {
    return (
        <>
            
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                        <Link to="/about-us">Sobre nosotros</Link>
                        <Link to="/faq">Preguntas frecuentes</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route path="/*" element='inicio'></Route>
                <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
                <Route path='/faq' element={<Faq></Faq>}></Route>
            </Routes>
        </>
    )
}