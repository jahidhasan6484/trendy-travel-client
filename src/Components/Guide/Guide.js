import React from 'react';
import './Guide.css';
import beaches from '../../img/types/beach.png';
import dog from '../../img/types/dog.png';
import restaurant from '../../img/types/restaurant.png';
import hotel from '../../img/types/hotel.png';
import camping from '../../img/types/camping.png';
import lowBudget from '../../img/types/low_budget.png';

import guide1 from '../../img/guide/guide1.jpg';
import guide2 from '../../img/guide/guide2.jpg';
import guide3 from '../../img/guide/guide3.jpg';
import guide4 from '../../img/guide/guide4.jpg';
import guide5 from '../../img/guide/guide5.jpg';
import guide6 from '../../img/guide/guide6.jpg';

const Guide = () => {
    return (
        <div className="brown">
            <div className="section_padding">
                <div className="container">
                    <p className="title">our travel guide</p>
                    <p className="sub_title">Read about your favorite travel destinations	&amp; our adventures</p>
               
               <div class="row mt-5">
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide1} alt={guide1} className="guide_image"></img>
                            <p className="guide_price">buy for $20</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide2} alt={guide2} className="guide_image"></img>
                            <p className="guide_price">buy for $22</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide3} alt={guide3} className="guide_image"></img>
                            <p className="guide_price">buy for $18</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide4} alt={guide4} className="guide_image"></img>
                            <p className="guide_price">buy for $25</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide5} alt={guide5} className="guide_image"></img>
                            <p className="guide_price">buy for $12</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="guide_card_body">
                            <img src={guide6} alt={guide6} className="guide_image"></img>
                            <p className="guide_price">buy for $08</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>

        </div>
    );
};

export default Guide;