import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import list from '../../img/logo/list.svg'; 
import instagram from '../../img/socials/instagram.svg';
import twitter from '../../img/socials/twitter.svg';
import facebook from '../../img/socials/facebook.svg';
import youtube from '../../img/socials/youtube.svg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="logo">
                    <Link to="/" className="navbar-brand" href="#">TrendyTravel</Link>
                    <p className="text-center navbar_subtitle">never ending footsteps</p>
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={list} alt="List" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <Link to="/home">home</Link>
                        <Link to="/pages">pages</Link>
                        <Link to="/travel">travel</Link>
                        <Link to="/blog">blog</Link>
                        <Link to="/shop">shop</Link>
                        <Link to="/elements">elements</Link>
                    </ul>
                    <div className="socials d-flex ms-auto">
                        <Link to="/instagram"><img className="social_media" src={instagram} alt="Instagram" /></Link>
                        <Link to="/twitter"><img className="social_media" src={twitter} alt="Twitter" /></Link>
                        <Link to="/facebook"><img className="social_media" src={facebook} alt="Facebook" /></Link>
                        <Link to="/youtube"><img className="social_media" src={youtube} alt="YouTube" /></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;