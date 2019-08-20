import React from 'react';

import Logo from "../../Assets/PetCareLogo";

import "./styles.css";

export default function HeaderMainPage({ hideBtns }) {
    return (
        <header className="header-main-container">
            <div className="content-header">
                <div className="image-logo">
                    <Logo />
                </div>
                <nav className="nav-header-main">
                    {hideBtns ? ('') : (
                        <a href="/entrar" className="entrar-a">
                            <div className="btn-entrar">
                                <span>Entrar</span>
                            </div>
                        </a>
                    )}
                    {hideBtns ? ('') : (<a href="/cadastrar" className="cadastrar-btn">Cadastre seu pet shop</a>)}
                </nav>
            </div>
        </header>
    );
}
