import React from 'react';
import './Destinations.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parish from '../../img/destinations/parish.jpg';
import machu from '../../img/destinations/machu_picchu.jpg';
import colosseum from '../../img/destinations/colosseum.jpg';
import statue from '../../img/destinations/statue.jpg';
import opera from '../../img/destinations/opera.jpg';
import cox from '../../img/destinations/cox.jpg';


const Destinations = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows: false,
        dots: false,

        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 411,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="section_margin">
            <div className="container">
                <p className="title">destinations</p>
                <p className="sub_title">We are the Backpack Traveler, your favorite travel assistants!</p>
                <Slider {...settings} className="mt-5">

                    <div class="destinations_card">
                        <img src={parish} alt="Parish" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">parish</p>
                            <p className="destinations_feature">the essential parish travel guide</p>
                            <p className="destinations_type">adventure</p>
                        </div>
                    </div>
                    <div class="destinations_card">
                        <img src={machu} alt="Machu Picchu" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">machu picchu</p>
                            <p className="destinations_feature">15th-century Inca citadel</p>
                            <p className="destinations_type">adventure</p>
                        </div>
                    </div>
                    <div class="destinations_card">
                        <img src={colosseum} alt="Colosseum" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">colosseum</p>
                            <p className="destinations_feature">an oval amphitheatre  of Rome</p>
                            <p className="destinations_type">adventure</p>
                        </div>
                    </div>
                    <div class="destinations_card">
                        <img src={opera} alt="Opera House" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">opera house</p>
                            <p className="destinations_feature">unparalleled design and construction</p>
                            <p className="destinations_type">adventure</p>
                        </div>
                    </div>
                    <div class="destinations_card">
                        <img src={statue} alt="Statue of Liberty" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">statue of liberty</p>
                            <p className="destinations_feature">a colossal neoclassical sculpture</p>
                            <p className="destinations_type">adventure</p>
                        </div>
                    </div>
                    <div class="destinations_card">
                        <img src={cox} alt="Cox's Bazar" className="destinations_image"></img>
                        <div className="destinations_details">
                            <p className="destinations_name">cox's bazar</p>
                            <p className="destinations_feature">long natural sandy sea beach</p>
                            <p className="destinations_type">beaches</p>
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    );
};

export default Destinations;