import React from 'react'
import Cars from './Cars'
import Clothes from './Clothes'
import Electronic from './Electronic'
import Fashon from './Fashon'
import Services from './Services'
import "./style.css"

const Main = ({ AddToCart }) => {
    return (
        <>
            <Cars AddToCart={AddToCart} />
            <Clothes AddToCart={AddToCart} />
            <Services />
            <Electronic AddToCart={AddToCart} />
            <Fashon AddToCart={AddToCart} />
        </>
    )
}

export default Main