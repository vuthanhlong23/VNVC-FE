import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/dangkythanhvien.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'

const DangKyThanhVien = () => {
    

    return (
        <div>
            <div className="main_content">
                <div className="row">
                    <div className="title">
                        <h1 className="text-center">
                            <span>Đăng ký thành viên</span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 center-column">
                            <div className="form">
                                <div className="col-sm-8 col-sm-offset-2 col-xs-12">
                                    <form className="form_register">
                                        <div className="indexing">
                                            <h3>Thông tin cá nhân</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-firstname">Họ và Tên</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="firstname" value placeholder="Họ và tên" id="input-firstname" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-gender">Giới tính</label>
                                                    <div className="col-xs-12">
                                                        <select id="gender" name="gender" className="form-control">
                                                            <option value="Nam">Nam</option>
                                                            <option value="Nữ">Nữ</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-numberphone">Số điện thoại</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="numberphone" value placeholder="Số điện thoại" id="input-numberphone" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-birth">Ngày sinh</label>
                                                    <div className="col-xs-12">
                                                        <input type="date" name="birth" id="input-birth" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-cccd">CMND/CCCD</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="cccd" value placeholder="CMND/CCCD" id="input-cccd" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-customerId">Mã khách hàng(Nếu có)</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="customerId" value placeholder="Mã khách hàng" id="input-customerId" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-email">Email</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="email" value placeholder="Email" id="input-email" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-address">Số nhà - Tên đường</label>
                                                    <div className="col-xs-12">
                                                        <input type="text" name="address" value placeholder="Địa chỉ" id="input-address" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-city">Thành phố/ Tỉnh</label>
                                                    <div className="col-xs-12">
                                                        <select name="city" id="input-city" className="form-control">
                                                            <option value>--- Chọn ---</option>
                                                            <option value="1">Thủ đô Hà Nội</option>
                                                            <option value="79">Thành phố Hồ Chí Minh</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-address">Quận/ Huyện</label>
                                                    <div className="col-xs-12">
                                                        <select name="zone" id="input-zone" className="form-control">
                                                            <option value>--- Chọn ---</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12">
                                                <div className="row required">
                                                    <label className="col-xs-12 control-label" for="input-city">Phường/ Xã</label>
                                                    <div className="col-xs-12">
                                                        <select name="ward" id="input-ward" className="form-control">
                                                            <option value>--- Chọn ---</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4><b>Lưu ý:</b> Các mục dấu sao không được bỏ trống & phải điền đầy đủ, chính xác</h4>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="title">
                        <div className="buttons_">
                            <div className="text-center">
                                <input type="button" id="click_register" value="Đăng ký" className="button_register"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DangKyThanhVien;