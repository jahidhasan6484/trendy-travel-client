import React from 'react';
import './Essential.css';
import bag from '../../img/essential/bag.png';
import shoes from '../../img/essential/shoes.png';
import camera from '../../img/essential/camera.png';
import luggage from '../../img/essential/luggage.png';
import sunGlass from '../../img/essential/sun_glass.png';

const Essential = () => {
    return (
        <div className="brown">
            <div className="section_padding">
                <div className="container">
                    <p className="title">travel essential</p>
                    <p className="sub_title">We are the Backpack Traveler, your favorite travel assistants!</p>
                    <div class="row mt-5 essential">
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <img src={bag} alt="bag" className="essential_image"></img>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <img src={shoes} alt="shoes" className="essential_image"></img>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <img src={camera} alt="camera" className="essential_image"></img>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <img src={luggage} alt="luggage" className="essential_image"></img>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6">
                            <img src={sunGlass} alt="sunGlass" className="essential_image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Essential;