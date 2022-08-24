import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { ElectronicData } from '../../Data'
import { settings } from '../../Seetings'
import logo from "./cat2.png"
const Electronic = ({AddToCart}) => {
    return (
        <section className='Electroinc' id='electroinc'>
            <div className='container'>
                <div className='d-flex info-text'>
                    <img src={logo} alt="car" />
                    <h3>Electroinc</h3>
                </div>
                <Slider {...settings}>
                    {ElectronicData.map((item) => (
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

  )
}

export default Electronic