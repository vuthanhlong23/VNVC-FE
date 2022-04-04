import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'

const Thongbao = () => {
    

    return (
        <div className="main-content">
            <div className="grid">
                <h1 className="text-center">
                    <span>ĐĂNG KÝ THÀNH CÔNG!</span>
                </h1>
                <p className="noti-page">
                    Quý khách đã đăng ký thông tin tiêm chủng thành công.
                    Việc đăng ký thông tin đầy đủ sẽ giúp Quý khách tiết kiệm thời gian khi làm thủ tục tại quầy lễ tân. 
                    Kính mời Quý khách đến Trung tâm VNVC để được phục vụ và xin vui lòng cân nhắc tiêm vào buổi chiều để có không gian thoáng đãng hơn, không phải chờ đợi. 
                    Rất mong được đón tiếp Quý khách.
                    Trân trọng.
                </p>
                <h4 className="Hotline-1">
                    <span>Hệ thống Trung tâm Tiêm chủng VNVC</span>
                </h4>
                <h4 className="Hotline-2">
                    <span>Hotline 028 7300 6595</span>
                </h4>
                <Link to="trangchu.html" className="btn btn-outline-secondary btn" role="button">
                    Trở về trang chủ
                </Link>
            </div>
        </div>
    );
}

export default Thongbao;