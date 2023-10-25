import React from "react";
import axios from "axios";

async function GetSalesperson(divId: HTMLDivElement){
    const salesPersonUrl = "http://localhost:8080/api/vendedor";

    await axios.get(salesPersonUrl)
    .then((response) =>{
        const dataSalesperson: Record<string, {name: string, lastName: string,
        phoneNumber: string,
        cpf: string,
        email: string,
        address: string}> = response.data;

        const dataSalespersonArray = Object.entries(dataSalesperson).map(
            ([key, value]) => ({
                key,
                ...value
            }));

            dataSalespersonArray.forEach((dados) => {

                
                console.log('cheguei na criacao')

                
                var teste: string;

                teste.innerHTML = `
                        <div className="cards">
                            <div className="cardImg">
                                <img src = ${dados.name} alt = ""></img>        
                            </div>
                            <div className="cardTitle">
                                ${dados.lastName}        
                            </div>
                            <div className="cardSubTitle">
                                ${dados.phoneNumber}        
                            </div>
                        </div>
                `;

                console.log("cheguei depois da criacao")
                console.log( "TESTE", teste)
        

                divId.appendChild(teste);
                // document.body.appendChild(newDiv);

            }   
        )


    })

    .catch((error) => {
        console.log("O erro ocorrido foi: ", error);
    })


}


async function PostSalesperson(){

}


export default { GetSalesperson, PostSalesperson };