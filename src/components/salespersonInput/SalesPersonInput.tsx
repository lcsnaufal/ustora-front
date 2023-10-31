import React from 'react';
import "./SalesPersonInput.css";
import axios from 'axios';

async function SalesPersonDataPost(){

    var salesPersonNameInput = document.getElementById("salesPersonName")  as HTMLInputElement || null;
    var salesPersonLastNameInput = document.getElementById("salesPersonLastName")  as HTMLInputElement || null;
    var salesPersonPhoneNumberInput = document.getElementById("salesPersonPhoneNumber")  as HTMLInputElement || null;
    var salesPersonAddressInput = document.getElementById("salesPersonAddress") as HTMLInputElement || null;
    var salesPersonEmailInput = document.getElementById("salesPersonEmail")  as HTMLInputElement || null;
    var salesPersonCpfInput = document.getElementById("salesPersonCpf")  as HTMLInputElement || null;
    var salesPersonUrl = "http://localhost:8080/api/vendedor";

    var salesPersonDataJson = {

        "name": salesPersonNameInput.value.toString(),
        "lastName": salesPersonLastNameInput.value.toString(),
        "phoneNumber": salesPersonPhoneNumberInput.value.toString(),
        "cpf": salesPersonCpfInput.value.toString(),
        "email": salesPersonEmailInput.value.toString(),
        "address": salesPersonAddressInput.value.toString()
        
    }


    await axios.post(salesPersonUrl, salesPersonDataJson,
        {
            headers : {
                "Content-Type":"application/json",
            }
        })
    .then((response) =>{
        console.log(response)
    })
}



function SalesPersonInput(){
    return(
        <div className="SalesPersonInput">
            <div className = "mainBody">
                <div className="SalesPersonInputBody">
                    <input type = "text" id = "salesPersonName" placeholder='Nome'/>
                </div>
                <div className="SalesPersonInputBody">
                    <input type = "text" id = "salesPersonLastName" placeholder='Sobrenome'/>
                </div>
                <div className="SalesPersonInputBody">
                    <label>Número de telefone: </label>
                    <input type = "text" id = "salesPersonPhoneNumber" placeholder='00 00000-0000'/>
                </div>
                <div className="SalesPersonInputBody">
                    <input type = "text" id = "salesPersonAddress" placeholder='Endereço'/>
                </div>
                <div className="SalesPersonInputBody">
                    <input type = "text" id = "salesPersonEmail" placeholder='Email'/>
                </div>
                <div className="SalesPersonInputBody">
                    <label>Cpf: </label>
                    <input type = "text" id = "salesPersonCpf" placeholder='000.000.000-00'/>
                </div>
                <button type = "submit" id="sendBtnPost"  className='button' onClick={SalesPersonDataPost}>Post</button>
            </div>
        </div>
    );
};

export default SalesPersonInput;
