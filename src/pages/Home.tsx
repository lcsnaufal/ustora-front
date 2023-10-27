import React from 'react';
import CardP from '../components/card/CardP';
import ProductsText from '../components/productsText/ProductsText';
import MainImage from '../components/mainImage/MainImage';



function Home(){
    return(
        <>
        <MainImage/>
        <ProductsText/>
        <CardP/>
        </>
    )
}

export default Home;