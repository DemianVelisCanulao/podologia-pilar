import { useState } from 'react';
import './Navbar.css'

export function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header>
            
            <nav>
             <div className="menu-toggle" onClick={() => setMenuOpen((prev ) => !prev)}>&#9776;</div>
                <ul className={`${menuOpen ? 'show' : 'nav-list'}`}>
                    <li><a href="#about">Sobre mi</a></li>
                    <li><a href="#experiences">Perfil Podologico</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#testimonies">Testimonios</a></li>
                </ul>
            </nav>
            
        </header>
    )
}