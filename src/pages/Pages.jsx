import React from 'react'
import Home from '../components/Home/Home'

const Pages = ({ ProductsData, AddToCart }) => {
  return (
    <>
      <Home AddToCart={AddToCart} />
    </>
  )
}

export default Pages
