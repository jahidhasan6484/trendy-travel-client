import React from 'react';
import './Slider.css';
import Fade from 'react-reveal/Fade';
import cox from '../../img/slider/cox.jpg';
import eifel from '../../img/slider/eifel.jpg';
import man from '../../img/slider/manhattan.jpg';
import marina1 from '../../img/slider/marina1.jpg';
import marina2 from '../../img/slider/marina2.jpg';
import marina3 from '../../img/slider/marina3.jpg';
import opera from '../../img/slider/opera.jpg';
import saint from '../../img/slider/saint.jpg';
import taj from '../../img/slider/tajmahal.jpg';
import burj from '../../img/slider/burj.jpg';
import big from '../../img/slider/big.jpg';

const Slider = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="8000">
                    <img src={cox} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>bangladesh</h1>
                            <h5>cox's bazar, chattogram</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={eifel} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>france</h1>
                            <h5>eiffel tower, paris</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={big} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>united kingdom</h1>
                            <h5>big ben, london</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={burj} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>united arab emirates</h1>
                            <h5>burj khalifa, dubai</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={marina3} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>singapore</h1>
                            <h5>marina bay</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={opera} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>australia</h1>
                            <h5>opera house, sydney</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="8000">
                    <img src={saint} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>bangladesh</h1>
                            <h5>saint martin, chattogram</h5>
                        </Fade>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={taj} class="d-block w-100 " alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <Fade bottom>
                            <h1>india</h1>
                            <h5>taj mahal, agra</h5>
                        </Fade>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Slider;