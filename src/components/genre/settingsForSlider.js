const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    intialSlide: 0,
    responsive: {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
        },


        breakpoint: 600,
        settings:
            {
                slidesToShow: 2,
                slidesToScroll: 2,
                intialSlide: 2,
            },


        breakpoint: 480,
        settings: {
    slidesToShow: 1,
    slidesToScroll:1,
}
}
}


export {settings};