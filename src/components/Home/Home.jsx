import React from 'react'
import Main from '../MainPages/Main'
import SliderHome from './Slider'
import "./style.css"

const Home = ({ ProductsData, AddToCart }) => {

    return (
        <>
            <div className='home'>
                <SliderHome />
                <Main AddToCart={AddToCart} />
            </div>
        </>
    )
}

export default Home