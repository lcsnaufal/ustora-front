import React from "react";
import "./UserInput.css";
import axios from "axios";

// 

async function UserDataPost(){

    var userNameInput = document.getElementById("userName")  as HTMLInputElement || null;
    var userLastNameInput = document.getElementById("userLastName")  as HTMLInputElement || null;
    var userAgeInput = document.getElementById("userAge")  as HTMLInputElement || null;
    var userAddressInput = document.getElementById("userAddress") as HTMLInputElement || null;
    var userEmailInput = document.getElementById("userEmail")  as HTMLInputElement || null;
    var userCpfInput = document.getElementById("userPassword")  as HTMLInputElement || null;
    var userPasswordInput = document.getElementById("userCpf")  as HTMLInputElement || null;
    var userUrl = "http://localhost:8080/api/usuario";

    var userDataJson = {

        "name": userNameInput.value.toString(),
        "lastName": userLastNameInput.value.toString(),
        "age": userAgeInput.value.toString(),
        "cpf": userCpfInput.value.toString(),
        "email": userEmailInput.value.toString(),
        "password": userPasswordInput.value.toString(),
        "address": userAddressInput.value.toString()
        
    
    }


    await axios.post(userUrl, userDataJson,
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
                <label>Idade: </label>
                <input type = "text" id = "userAge"/>
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
                <label>Senha: </label>
                <input type = "text" id = "userPassword"/>
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