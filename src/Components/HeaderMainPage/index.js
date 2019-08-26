import React, { useEffect, useState } from 'react';

import Logo from "../../Assets/PetCareLogo";

import { isAuthenticated } from '../../Services/auth';

import "./styles.css";

export default function HeaderMainPage({ hideBtns }) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (isAuthenticated()) {
            console.log("Authenticado")
            setIsAuth(true);
        }
    }, []);

    async function handleLogOut() {
        localStorage.removeItem('jwtToken');
        // api deslogar (a fazer)...
    }

    return (
        <header className="header-main-container">
            <div className="content-header">
                <div className="image-logo">
                    <Logo />
                </div>
                <nav className="nav-header-main">
                    {isAuth ? (
                        <>
                            <div className="actions-header">
                                <a href="/favoritos"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></a>
                                <a href="/sacola"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg></a>
                                <a href="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                                <a href="/login" onClick={handleLogOut} ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" /></svg></a>
                            </div>
                        </>
                    ) : (
                            <>
                                <a href="/entrar" className="entrar-a">
                                    <div className="btn-entrar">
                                        <span>Entrar</span>
                                    </div>
                                </a>
                                <a href="/cadastrar" className="cadastrar-btn">Cadastre seu pet shop</a>
                            </>
                        )}
                </nav>
            </div>
        </header>
    );
}
