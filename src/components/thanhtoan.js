import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/thanhtoan.css'



const Thanhtoan = () => {
    
    return (
        <div>
            <div className="main-content">
                <div className="title">
                    <h1 className="text-center">
                        <span>ĐĂNG KÝ MŨI TIÊM (THANH TOÁN)</span>
                    </h1>
                    <div className="grid">
                        <div className="row">
                            <div className="col-8">
                                <div className="row">
                                    <span className="payment_buyer_information">
                                        THÔNG TIN NGƯỜI MUA
                                    </span>
                                    <span className="payment_buyer_description">
                                        Thông tin này để chúng tôi liên lạc khi cần thiết. Quý khách có thể đăng ký vắc xin cho 5 người cùng lúc, tất cả thông tin quý khách cần cung cấp chính xác để chúng tôi xác thực khi đến trung tâm
                                    </span>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-6">
                                        <span className="payment_buyer_input_title">
                                            Họ và tên *
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="payment_buyer_input_title">
                                            Số điện thoại *
                                        </span>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-6">
                                        <input type="text" className="form-control payment_item_title" placeholder="Họ và tên *"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control payment_item_title" placeholder="Số điện thoại *"/>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-6">
                                        <span className="payment_buyer_input_title">
                                            Email *
                                        </span>
                                    </div>
                                    <div className="col-6">
                                        <span className="payment_buyer_input_title">
                                            CMND/ CCCD/ PASSPORT *
                                        </span>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-6">
                                        <input type="text" className="form-control payment_item_title" placeholder="Email *"/>
                                    </div>
                                    <div className="col-6">
                                        <input type="text" className="form-control payment_item_title" placeholder="CMND/ CCCD/ PASSPORT *"/>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <span className="payment_buyer_input_title">
                                        Địa chỉ *
                                    </span>
                                </div>
                                <div className="row payment_items_address">
                                    <input type="text" className="form-control payment_item_title" placeholder="Số nhà, tên đường (Theo hộ khẩu/CMND)"/>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-4">
                                        <span className="payment_buyer_input_title">
                                           Tỉnh/ thành *
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="payment_buyer_input_title">
                                            Quận/Huyện *
                                        </span>
                                    </div>
                                    <div className="col-4">
                                        <span className="payment_buyer_input_title">
                                            Phường/Xã *
                                        </span>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <div className="col-4">
                                        <input type="text" className="form-control payment_item_title" placeholder="Tỉnh/ thành *"/>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control payment_item_title" placeholder="Quận/Huyện *"/>
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control payment_item_title" placeholder="Phường/Xã *"/>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <span className="payment_type_title">
                                        CHỌN PHƯƠNG THỨC THANH TOÁN
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="form-check">
                                        <input className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ thanh toán nội địa (ATM)
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ VISA/MASTER/JCB
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ thành viên
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán qua chuyển khoản
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán tại trung tâm
                                        </label>
                                      </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="payment_vacxin-chosen-item">
                                    <h4 className="payment_vacxin-chosen-item__title"><i className="payment_vacxin-chosen-item__icon far fa-clipboard-list"></i>DANH SÁCH VẮC XIN CHỌN MUA </h4>
                                    <div className="payment_vacxin-chosen-item__info">
                                        <span className="payment_vacxin-chosen-item__name">GÓI VẮC XIN INFRANRIX</span>
                                        <span className="payment_vacxin-chosen-item__price">14.604.000 VNĐ</span>
                                        <span className="payment_vacxin-chosen-item__name">GÓI VẮC XIN INFRANRIX</span>
                                        <span className="payment_vacxin-chosen-item__price">14.604.000 VNĐ</span>
                                        <span className="payment_vacxin-chosen-item__name">GÓI VẮC XIN INFRANRIX</span>
                                        <span className="payment_vacxin-chosen-item__price">14.604.000 VNĐ</span>
                                    </div>
                                    <div className="payment_vacxin-chosen-item__local">
                                        <span className="payment_vacxin-chosen-item__local_address"> TRUNG TÂM</span>
                                        <span className="payment_vacxin-chosen-item__location">VNVC DĨ AN</span>
                                    </div>
                                    <div className="payment_vacxin-chosen-item__total">
                                        <span className="payment_vacxin-chosen-item__name__total">TỔNG TIỀN</span>
                                        <span className="payment_vacxin-chosen-item__price__total">43.381.200 VNĐ</span>
                                    </div>
                                    <Link to="thongbao.html" className="btn btn-outline-secondary payment_vacxin-chosen-item_dk_btn" role="button">
                                        THANH TOÁN
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                </div> 
            </div>
        </div>
    );
}

export default Thanhtoan;