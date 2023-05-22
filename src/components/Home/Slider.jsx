import React from 'react'
import { SlidData } from './HomeData'
import Slider from "react-slick"    /*Slider from  react-slick*/
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

    };
    return (
        <>
            <div className='container'>
                <Slider {...settings}>
                    {SlidData.map((item, i) => (
                        <div className="box flex" key={i}>
                            <div className="left">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                                <button className="btn-praimary">Vist Collaction</button>
                            </div>
                            <div className="right">
                                <img  src={item.cover}  alt=""  style={{width:'50%'}}/>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default SliderHome