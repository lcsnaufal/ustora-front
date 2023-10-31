import React from "react";
import "./ProductsInput.css";
import axios from "axios";

// 

async function ProductsDataPost(){

    var productsNameInput = document.getElementById("productsName")  as HTMLInputElement || null;
    var productsPriceInput = document.getElementById("productsPrice")  as HTMLInputElement || null;
    var productsColorInput = document.getElementById("productsColor")  as HTMLInputElement || null;
    var productsDescriptionInput = document.getElementById("productsDescription")  as HTMLInputElement || null;
    var productsQuantityInput = document.getElementById("productsQuantity")  as HTMLInputElement || null;
    var productsImgInput = document.getElementById("productsImage")  as HTMLInputElement || null;
    var productsUrl = "http://localhost:8080/api/produtos";

    var productsDataJson = {

        "pName": productsNameInput.value.toString(),
        "pPrice": productsPriceInput.value.toString(),
        "pColor": productsColorInput.value.toString(),
        "pDescription": productsDescriptionInput.value.toString(),
        "pQuantity": productsQuantityInput.value.toString(),
        "pImg": productsImgInput.value.toString()
        
    
    }


    await axios.post(productsUrl, productsDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



function ProductsInput(){
    return(
        <div className="ProductsInput">

            <div className="mainBody">

                <div className="ProductsInputBody">
                    <input type = "text" id = "productsName" placeholder="Nome" className="inputs"/>
                </div>
                <div className="ProductsInputBody">
                    <input type = "text" id = "productsPrice" placeholder="Preço" className="inputs"/>
                </div>
                <div className="ProductsInputBody">
                    <input type = "text" id = "productsColor" placeholder="Cor" className="inputs"/>
                </div>
                <div className="ProductsInputBody">
                    <input type = "text" id = "productsDescription" placeholder="Descrição" className="inputs"/>
                </div>
                <div className="ProductsInputBody">
                    <input type = "text" id = "productsQuantity" placeholder="Quantidade" className="inputs"/>
                </div>
                <div className="ProductsInputBody">
                    <input type = "text" id = "productsImage" placeholder="Imagem" className="inputs"/>
                </div>
                <button type = "submit" id="sendBtnPost" className="button" onClick={ProductsDataPost}>Post</button>

            </div>
        </div>
    );
};

export default ProductsInput;

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