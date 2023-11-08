import React, { useEffect } from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){

    useEffect(() =>{

        var endereco = document.location.href.split("/")[4];
            
        if (endereco === "products"){
            var divProducts = document.getElementById("products") as HTMLDivElement;
            divProducts.classList.add("disableLink");
        }
        else if (endereco === "users"){
            var divUsers = document.getElementById("users") as HTMLDivElement;
            divUsers.classList.add("disableLink");
        }
        else if(endereco === "salesperson"){
            var divSales = document.getElementById("sales") as HTMLDivElement;
            divSales.classList.add("disableLink");
        }
        else{
            var divHome = document.getElementById("home") as HTMLDivElement;
            divHome.classList.add("disableLink");
        }
    }, [])
    
    
    return(
        <div className= "navbar">
            <div className = "navbarHomeFather" id = "home">
                <Link to = "/" className = "navbarHome" onClick={Navbar}>
                    Home
                </Link>
            </div>
            <div id = "products" className = "navbarChild">
            <Link to = "products" className = "navbarChild" onClick={Navbar}>
                Cadastro de Produtos
            </Link>
            </div>
            <div className = "navbarChild" id = "users">
            <Link to = "users" className = "navbarChild" onClick={Navbar}>
                Cadastro de Usuários
            </Link>
            </div>
            <div id = "sales" className = "navbarChild">
            <Link to = "salesperson" className = "navbarChild" onClick={Navbar}>
                Cadastro de Vendas
            </Link>
            </div>
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