const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className='Arrow-btn' onClick={onClick}>
            <button className='next'>
                <i className="fa fa-long-arrow-right"></i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className='Arrow-btn' onClick={onClick}>
            <button className='prev'>
                <i className="fa fa-long-arrow-left"></i>
            </button>
        </div>
    )
}
export let settings = {
    dots: true,
    infinite: false,
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};