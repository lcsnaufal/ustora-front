import React, { useEffect } from "react";
import './CardP.css';
import GetSalesperson from '../../Services/api';


var teste = GetSalesperson;


function CardP(){

    useEffect(() =>{

        var divId = document.getElementById("mainCard") as HTMLDivElement; 
        console.log("divId dentro do componente: ", divId)
        GetSalesperson.GetSalesperson(divId);

    })


    return(
        <div id="mainCard" className= "mainCard">
        </div>
    )
}

export default CardP;