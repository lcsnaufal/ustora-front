import React from "react";
import "./UserInput.css";
import axios from "axios";

// 

async function UserDataPost(){

    var userNameInput = document.getElementById("userName")  as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    var userPhoneNumberInput = document.getElementById("userPhoneNumber")  as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    var salesPersonUrl = "http://localhost:8080/api/vendedor";

    var userDataJson = {

        "name": userNameInput.value.toString(),
        "lastName": userLastNameInput.value.toString(),
        "phoneNumber": userPhoneNumberInput.value.toString(),
        "cpf": userCpfInput.value.toString(),
        "email": userEmailInput.value.toString(),
        "address": userAddressInput.value.toString()
        
    }


    await axios.post(salesPersonUrl, userDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



function UserInput(){
    return(
        <div className="UserInputMain">
            <div className="UserInputBody">
                <label>Nome: </label>
                <input type = "text" id = "userName"/>
            </div>
            <div className="UserInputBody">
                <label>Sobrenome: </label>
                <input type = "text" id = "userLastName"/>
            </div>
            <div className="UserInputBody">
                <label>Número de telefone: </label>
                <input type = "text" id = "userPhoneNumber"/>
            </div>
            <div className="UserInputBody">
                <label>Endereço: </label>
                <input type = "text" id = "userAddress"/>
            </div>
            <div className="UserInputBody">
                <label>Email: </label>
                <input type = "text" id = "userEmail"/>
            </div>
            <div className="UserInputBody">
                <label>CPF: </label>
                <input type = "text" id = "userCpf"/>
            </div>
            
            <button type = "submit" id="sendBtnPost" onClick={UserDataPost}>Post</button>
        </div>
    );
};

export default UserInput;

    // <button type = "submit" id="sendBtn" onClick={UserDataGet}>Get</button>


    // async function UserDataGet(){

    //     var userNameInput = document.getElementById("userName")  as HTMLInputElement || null;
    //     var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    //     var userPhoneNumberInput = document.getElementById("userPhoneNumber")  as HTMLInputElement || null;
    //     var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    //     var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    //     var userCpfInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    //     var salesPersonUrl = "http://localhost:8080/api/vendedor";
        
    
    //     await axios.get(salesPersonUrl)
    //     .then((response) => {
    
    
    //         const dataSalesPerson: Record<string, {name: string, lastName: string,
    //         phoneNumber: string,
    //         cpf: string,
    //         email: string,
    //         address: string}> = response.data;
    
    //         const dataSalesPersonArray = Object.entries(dataSalesPerson).map(
    //             ([key,value]) => ({
    //                 key,
    //                 ...value
    //             }))
    
    //             console.log(dataSalesPersonArray[1]);
    
    //             dataSalesPersonArray.forEach((i) => {
                    
    //                 const newDiv = document.createElement("div");
    
    //                 newDiv.innerHTML = `
    //             <div>
    //                 Nome: ${i.name} 
    //             </div>
    //             <div>
    //                 Sobrenome: ${i.lastName}
    //             </div>
    //             <div>
    //                 Telefone: ${i.phoneNumber}
    //             </div>
    //             <div>
    //                 Endereço: ${i.address}
    //             </div>
    //             <div>
    //                 Email: ${i.email}
    //             </div>
    //             <div>
    //                 Cpf: ${i.cpf}
    //             </div>
    //             <br/><br/> , 
    //             `;
    
    //             document.body.appendChild(newDiv);
    //             })
    
    //         // var teste = response.data;
            
    //         // console.log(teste.map((resposta: any) =>
    //         //         { const {name} = resposta;
    //         //         }))
    
    
                
    //     })
    // }