import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { FashonData } from '../../Data'
import { settings } from '../../Seetings'
import logo from "./cat1.png"
const Fashon = ({ AddToCart }) => {
    return (
        <>
            <section className='Fashon' id='fashon'>
                <div className='container'>
                    <div className='d-flex info-text'>
                        <img src={logo} alt="car" />
                        <h3>Fashon</h3>
                    </div>
                    <Slider {...settings}>

                        {FashonData.map((item) => (
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

export default Fashon