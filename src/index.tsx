import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Users from './pages/Users';
import SalesPerson from './pages/SalesPerson';
import Products from './pages/Products';
import BlankPage from './pages/BlankPage';


// BrowserRouter basename

export default function App() {
  return(
    <BrowserRouter basename='/br/'>
      <Routes>
        <Route element={<Layout/>}>   
          <Route index element = {<Home/>}/>
          <Route path = "users" element = {<Users/>}/>
          <Route path = "salesperson" element = {<SalesPerson/>}/>
          <Route path = "products" element = {<Products/>}/>
          <Route path = "*" element = {<BlankPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));

reportWebVitals();

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   // <React.StrictMode>  
//   <>
//   {/* <Navbar/>
//   <MainImage/>
//   <ProductsText/>
//   <CardP/> */}
//   </>
//   // </React.StrictMode>
// );

