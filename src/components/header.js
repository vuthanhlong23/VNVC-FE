import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'
import Logo from "../assets/res/datmuavx1.png";

const Header = () => {
    

    return (
        <div>
            <header>
                <div className="grid">
                    <div className="header_datmuavx1_vnvc">
                        <div className="header_datmuavx1_vnvc-logo">
                            <Link to="/trangchu"><img className="logo-vnvc-datmuavx1" src={Logo} alt=""/></Link>
                        </div>
                        <div>
                            <nav className="header_datmuavx1_vnvc__navbar">
                                <ul className="header_datmuavx1_vnvc__navbar-list">
                                    <li className="header_datmuavx1_vnvc__navbar-first-item">
                                        <div className="header_datmuavx1_vnvc__worktimedescription">
                                            <i className="header_datmuavx1_vnvc__navbar-item_icon fas fa-calendar-alt"></i>
                                            <div>
                                                <span className="row" >Giờ làm việc: Từ thứ 2 đến chủ nhật</span>
                                                <span className="row">Từ 7h30 - 17h00 (Không nghỉ trưa)</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="header_datmuavx1_vnvc__navbar-item header_datmuavx1_vnvc__navbar-item-right">
                                        <Link to="/trangchu"><i className="header_datmuavx1_vnvc__navbar-item_icon fas fa-home"></i>
                                        TRANG CHỦ VNVC
                                        </Link>
                                    </li>
                                    <li className="header_datmuavx1_vnvc__navbar-item">
                                        <Link to="/danhmucvaccine"><i className="header_datmuavx1_vnvc__navbar-item_icon fas fa-shield-virus"></i>DANH MỤC VẮC XIN</Link>
                                    </li>
                                    <li className="header_datmuavx1_vnvc__navbar-item">
                                        <Link to="#"><i className="header_datmuavx1_vnvc__navbar-item_icon fas fa-search"></i>TRA CỨU</Link>
                                    </li>
                                    <li className="header_datmuavx1_vnvc__navbar-item">
                                        <Link to="#"><i className="header_datmuavx1_vnvc__navbar-item_icon fas fa-book-medical"></i>FAQ</Link>
                                    </li>
                                </ul>   
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;