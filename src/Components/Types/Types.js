import React from 'react';
import './Types.css';
import beaches from '../../img/types/beach.png';
import dog from '../../img/types/dog.png';
import restaurant from '../../img/types/restaurant.png';
import hotel from '../../img/types/hotel.png';
import camping from '../../img/types/camping.png';
import lowBudget from '../../img/types/low_budget.png';

const Types = () => {
    return (
        <div className="section_margin">
            <div className="container">
                <p className="title">top categories</p>
                <p className="sub_title">We are That Backpacker, Melissa and Johnatan (that’s us!)</p>
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={beaches} alt={beaches} className="type_images"></img>
                            <h5>beaches</h5>
                            <p>4 destination</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={dog} alt={dog} className="type_images"></img>
                            <h5>dog-friendly</h5>
                            <p>2 destination</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={restaurant} alt={restaurant} className="type_images"></img>
                            <h5>restaurant</h5>
                            <p>3 destination</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={hotel} alt={hotel} className="type_images"></img>
                            <h5>overnight</h5>
                            <p>3 destination</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={camping} alt={camping} className="type_images"></img>
                            <h5>camping</h5>
                            <p>3 destination</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <div class="card-body">
                            <img src={lowBudget} alt={lowBudget} className="type_images"></img>
                            <h5>low budget</h5>
                            <p>2 destination</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Types;