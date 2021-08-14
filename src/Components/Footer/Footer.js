import React from 'react';
import './Footer.css';
import instagram from'../../img/socials/instagram.svg';
import facebook from'../../img/socials/facebook.svg';
import twitter from'../../img/socials/twitter.svg';
import whatsapp from'../../img/socials/whatsapp.svg';
import youtube from'../../img/socials/youtube.svg';
import telegram from'../../img/socials/telegram.svg';

const Footer = () => {
    return (
        <div className="section_margin">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="footer_title">follow us</p>
                        <div className="footer_content footer_social_box">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <img src={instagram} alt="instagram" className="footer_social_image"></img>
                                    <p className="social_name">instagram</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                <img src={facebook} alt="facebook" className="footer_social_image"></img>
                                    <p className="social_name">facebook</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                <img src={twitter} alt="twitter" className="footer_social_image"></img>
                                    <p className="social_name">twitter</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                <img src={whatsapp} alt="whatsapp" className="footer_social_image"></img>
                                    <p className="social_name">whatsapp</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                <img src={youtube} alt="youtube" className="footer_social_image"></img>
                                    <p className="social_name">youtube</p>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                <img src={telegram} alt="telegram" className="footer_social_image"></img>
                                    <p className="social_name">telegram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="footer_title">newsletter</p>
                        <div className="footer_content footer_subscribe_box">
                            <input className="footer_input form-control" placeholder="EMAIL ADDRESS"></input>
                            <button className="button footer_button">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;