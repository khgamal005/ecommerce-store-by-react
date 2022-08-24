import React, { Fragment } from 'react'
import { CarsData } from "../../Data"
import logo from "./car.png"
import Slider from "react-slick"
import { settings } from '../../Seetings'

const Cars = ({ AddToCart }) => {

    return (
        <>
            <section className='cars' id='cars'>
                <div className='container'>
                    <div className='d-flex info-text'>
                        <img src={logo} alt="car" />
                        <h3>CARS</h3>
                    </div>
                    <Slider {...settings}>

                        {CarsData.map((item) => (
                            <Fragment key={item.id}>
                                <div className="product">
                                    <div className="img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="product-deatils">
                                        <h3>{item.title}</h3>
                                        <div className="price">
                                            <h4>{item.price}.0</h4>
                                            <button onClick={() => AddToCart(item)}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}

                    </Slider>

                </div>
            </section>
        </>
    )
}

export default Cars