import React from "react";
import "./Navbar.css";

function Navbar(){
    return(
        <div className= "navbar">
            <div className = "navbarHomeFather">
                <div className = "navbarHome">
                    Home
                </div>
            </div>
            <div className = "navbarChild">
                Cadastro de Produtos
            </div>
            <div className = "navbarChild">
                Cadastro de Usuários
            </div>
            <div className = "navbarChild">
                Cadastro de Vendas
            </div>
        </div>
    )
}

export default Navbar;