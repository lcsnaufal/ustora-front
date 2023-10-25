import React from "react";
import "./Card.css";
import axios from "axios";

import imagePH from "../../img/s23.jpg";

async function GetCard(){

    var salesPersonUrl = "http://localhost:8080/api/vendedor";
    
    await axios.get(salesPersonUrl)
    .then((response) => {


        const dataSalesPerson: Record<string, {name: string, lastName: string,
        phoneNumber: string,
        cpf: string,
        email: string,
        address: string}> = response.data;

        const dataSalesPersonArray = Object.entries(dataSalesPerson).map(
            ([key,value]) => ({
                key,
                ...value
            }))

            console.log(dataSalesPersonArray[1]);

            dataSalesPersonArray.forEach((i) => {
                
                const newCard = document.createElement("div");

                newCard.innerHTML =
                `<div className = "card">
                    <img src = {imagePH} className = "cardImage">${i.name}</img>
                    <div className = "cardTitle"teste>${i.lastName}</div>
                    <div className = "cardText">R$6400,00</div>
                </div>
            </div>`;

            document.body.appendChild(newCard);
            })
            
    })
}

    function CardCreator(){
        return(
            <div>
                <button onClick = {GetCard}>Criar card</button>
            </div>
        )
    }   

// function Card(cardTitle: string){
//     return(
//         <div>
//             <div className = "card">
//                 <img src = {imagePH} className = "cardImage"></img>
//                 <div className = "cardTitle">{cardTitle}</div>
//                 <div className = "cardText">R$6400,00</div>
//             </div>
//         </div>
//     )
// }

export default CardCreator;