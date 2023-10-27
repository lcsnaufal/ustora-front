import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return(
        <div className= "navbar">
            <div className = "navbarHomeFather">
                <Link to = "/" className = "navbarHome">
                    Home
                </Link>
            </div>
            <Link to = "products" className = "navbarChild">
                Cadastro de Produtos
            </Link>
            <Link to = "users" className = "navbarChild">
                Cadastro de Usuários
            </Link>
            <Link to = "salesperson" className = "navbarChild">
                Cadastro de Vendas
            </Link>
            <div className = "navbarChildLogin">
                Logar
            </div>
            <div className = "navbarChildSignup">
                Cadastrar
            </div>
        </div>
        
    )
}

export default Navbar;