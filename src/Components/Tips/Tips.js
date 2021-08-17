import React from 'react';
import './Tips.css';
import tipsBook1 from '../../img/books/tips_book1.png';
import tipsBook2 from '../../img/books/tips_book2.png';
import Fade from 'react-reveal/Fade';

const Tips = () => {
    return (
        <div className="section_margin">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 tips_first_part mb-5">
                        <div className="col-md-6 first_book">
                            <Fade left>
                                <img src={tipsBook1} alt="Tips Book2"></img>
                            </Fade>
                        </div>
                        <div className="col-md-6 second_book">
                            <Fade top>
                                <img src={tipsBook2} alt="Tips Book2"></img>
                            </Fade>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <p className="title_left">best money -saving <br></br>travel tips!</p>
                        <p className="sub_title_left">See how I helped real readers plan, save and go on the tip of a lifetime.
                            <br></br>And get <span className="sub_title_highlights">actionable steps you can use to travel anywhere</span> - no matter <br></br>your income or where you're from!</p>

                        <div className="row subscription">
                            <div className="col-md-6">
                                <input className="form-control" placeholder="Name"></input>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="col-md-6">
                                <input className="form-control dropdown-toggle" placeholder="Country"></input>
                            </div>
                            <div className="col-md-6">
                                <button className="form-control btn">subscribe</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tips;