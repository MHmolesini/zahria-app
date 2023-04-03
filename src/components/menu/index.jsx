import { Link, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../../pages/aboutUs'
import { BsTypeH1 } from 'react-icons/bs'

export const Menu = () => {
    return (
        <>
            <Routes>
                <Route 
                    path="/*" 
                    element='inicio'>
                </Route>
                <Route 
                    path="/about-us" 
                    element='about us'>
                </Route>
            </Routes>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                        <Link to="/about-us">Sobre nosotros</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}