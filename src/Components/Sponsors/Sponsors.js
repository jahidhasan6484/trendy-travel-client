import React from 'react';
import './Sponsors.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sponsors1 from '../../img/sponsors/sponsors1.png';
import sponsors2 from '../../img/sponsors/sponsors2.png';
import sponsors3 from '../../img/sponsors/sponsors3.png';
import sponsors4 from '../../img/sponsors/sponsors4.png';
import sponsors5 from '../../img/sponsors/sponsors5.png';
import sponsors6 from '../../img/sponsors/sponsors6.png';
import sponsors7 from '../../img/sponsors/sponsors7.png';
import sponsors8 from '../../img/sponsors/sponsors8.png';
import sponsors9 from '../../img/sponsors/sponsors9.png';

const sponsors = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 411,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="section_margin">
            <div className="container">
                <p className="title">our sponsors</p>
                <Slider {...settings} className="mt-5">
                    <div>
                        <img src={sponsors1} alt="sponsors1" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors2} alt="sponsors2" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors3} alt="sponsors2" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors4} alt="sponsors4" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors5} alt="sponsors5" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors6} alt="sponsors6" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors7} alt="sponsors7" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors8} alt="sponsors8" className="sponsors_image"></img>
                    </div>
                    <div>
                        <img src={sponsors9} alt="sponsors9" className="sponsors_image"></img>
                    </div>
                </Slider>
            </div>

        </div>

    );
};

export default sponsors;