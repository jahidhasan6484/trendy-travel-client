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
                    <p className="navbar-brand" href="#">TrendyTravel</p>
                    <p className="text-center navbar-subtitle">never ending footsteps</p>
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
                        <img src={instagram} alt="Instagram" />
                        <img src={twitter} alt="Twitter" />
                        <img src={facebook} alt="Facebook" />
                        <img src={youtube} alt="YouTube" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;