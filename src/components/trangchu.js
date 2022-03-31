import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/trangchu.css'
import '../assets/stylesheets/base.css'
import slider from "../assets/res/slider.jpg";
import logovnvc from "../assets/res/logovnvc.png";
import eplus from "../assets/res/eplus.png";
import slider_1 from "../assets/res/slider-1.jpg";
import slider_2 from "../assets/res/slider-2.png";




const Trangchu = () => {
    return (
        <div>
            <header>
                <div className="grid">
                    <img className="slider-vnvc" src={slider} alt=""/> 
                </div>
                <div className="grid">
                    <div className="header_desktop_vnvc">
                    <img className="logo-vnvc" src={logovnvc} alt=""/> 

                        <nav className="header_desktop_vnvc__navbar">
                            <ul className="header_desktop_vnvc__navbar-list">
                                <li className="header_desktop_vnvc__navbar-item">
                                    <Link to="#"><i className="header_desktop_vnvc__navbar-item_icon fas fa-map-marker-alt"></i>TÌM TRUNG TÂM</Link>
                                </li>
                                <li className="header_desktop_vnvc__navbar-item">
                                    <Link to="#"><i className="header_desktop_vnvc__navbar-item_icon far fa-calendar-alt"></i>ĐĂNG KÝ TIÊM</Link>
                                </li>
                                <li className="header_desktop_vnvc__navbar-item">
                                    <Link to="#"><i className="header_desktop_vnvc__navbar-item_icon fas fa-shopping-cart"></i>ĐẶT MUA VẮC XIN</Link>
                                </li>
                                <li className="header_desktop_vnvc__navbar-item">
                                    <Link to="#"><i className="header_desktop_vnvc__navbar-item_icon fas fa-question-circle"></i>TƯ VẤN</Link>
                                </li>
                                <li className="header_desktop_vnvc__navbar-item">
                                    <Link to="#"><img className="logo-eplus" src={eplus} alt=""/></Link>
                                </li>
                                <li className="header_desktop_vnvc__navbar-item header_desktop_vnvc__navbar-hotline">
                                    <Link to="#">Hotline: 028 7300 6595</Link>
                                </li>
                            </ul>   
                        </nav>
                    </div>
                </div>
            </header>

            <div className="slider">
            <div className="grid">
                <img className="slider-1-vnvc" src={slider_1} alt=""/> 
            </div>
            <div className="grid">
                <img className="slider-2-vnvc" src={slider_2} alt=""/> 
            </div>
        </div>


        </div>
    );
}

export default Trangchu;