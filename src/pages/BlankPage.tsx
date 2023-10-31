import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

import Home from './Home';

function BlankPage(){
    return(
        <>
        <h1>Essa página não existe, cheque a url digitada</h1>
        <Link to = "" className='arrowBack'>
            Voltar
        </Link>
        </>
    )
}

export default BlankPage;