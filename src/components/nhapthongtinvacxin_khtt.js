import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'

const NhapThongTinVacXin_KHTT = () => {
    

    return (
        <div>
            <div className="container_nhapthongtinvx">
                <div className="grid">
                    <div className="row">
                        <span className="nhapthongtinvx_heading-title">
                        ĐĂNG KÝ MŨI TIÊM 
                        </span>
                    </div>
                </div>
                <div className="grid">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <Link to="/nhapthongtinvacxin_khtt" className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                    <label className="form-check-label nhapthongtinvx_customertype" for="flexRadioDefault1">
                                        Quý khách là thành viên khách hàng thân thiết
                                    </label>
                                </Link>
                                <Link to="/nhapthongtinvacxin_khktt" className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="form-check-label nhapthongtinvx_customertype" for="flexRadioDefault2">
                                        Quý khách chưa là thành viên khách hàng thân thiết
                                    </label>
                                </Link>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">ĐĂNG NHẬP THÀNH VIÊN KHÁCH HÀNG THÂN THIẾT</span>
                                <span className="nhapthongtinvx_mota-title">Nhập mã thẻ thành viên của quý khách</span>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <input type="text" placeholder="Nhập mã thẻ thành viên của quý khách" className="form-control"></input>  
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-outline-primary nhapthongtinvx_btn_khtt_tieptuc">TIẾP TỤC</button>
                                </div>
                            </div>
                            
                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">CHỌN VẮC XIN CHO NGƯỜI TIÊM</span>
                                <span className="nhapthongtinvx_mota-title">Quý khách có thể đăng ký thêm các loại vắc xin khác và sử dụng cho nhiều lần tiêm khác nhau.</span>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <select className="form-select nhapthongtinvx_chosen_vacxin-item" aria-label="Default select example">
                                        <option value="1">VẮC XIN GCFLU QUADTIVALENT</option>
                                        <option value="2">VẮC XIN CHO PHỤ NỮ TRƯỚC MANG THAI</option>
                                        <option value="3">VẮC XIN PHÒNG VIÊM GAN A - AVAXIM 80U</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-outline-primary nhapthongtinvx_btn_kiemtra">THÊM VẮC XIN</button>
                                </div>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">DANH SÁCH VẮC XIN ĐĂNG KÝ</span>
                            </div>

                            <div className="row">
                                <div className="col-4 align-items-center">
                                    <div className="nhapthongtinvx-package-item">
                                        <div className="nhapthongtinvx-package-item__wrap">
                                            <h4 className="nhapthongtinvx-package-item__name">GÓI VẮC XIN INFRANRIX (0-9 THÁNG) </h4>
                                            <span className="nhapthongtinvx-package-item__price"><i className="nhapthongtinvx-package-item__icon fa fa-tag"></i>14.190.000 VNĐ</span>
                                        </div>
                                        <span className="nhapthongtinvx-package-item__description1">Phòng bệnh:</span>
                                        <span className="nhapthongtinvx-package-item__description2">Tiêu chảy cấp do Rotavirus, Bạch Hầu, Ho gà, Uốn ván. Bại liệt, Viêm phổi do vi khuẩn não mô cầu tuýp A, C, Y bla bla bla bla bl bla bla bla </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4 nhapthongtinvx_btn_nhaplaithongtin_nltt">
                                    <button type="button" className="btn btn-outline-primary nhapthongtinvx_btn_nhaplaithongtin">NHẬP LẠI THÔNG TIN</button>
                                </div>
                                <div className="col-4 nhapthongtinvx_btn_tieptuc_tt">
                                    <button type="button" className="btn btn-outline-primary nhapthongtinvx_btn_tieptuc">TIẾP TỤC</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="nhapthongtinvx-chosen-item">
                                <h4 className="nhapthongtinvx-chosen-item__title"><i className="nhapthongtinvx-chosen-item__icon far fa-clipboard-list"></i>DANH SÁCH VẮC XIN CHỌN MUA </h4>
                                <div className="nhapthongtinvx-chosen-item__info">
                                    <div class="vacxin-chosen-item__name-wrap">
                                        <span class="nhapthongtinvx-chosen-item__name">GÓI VẮC XIN INFRANRIX BFSB SDFGSDFG SDFGFDG SDFGSDFGDFS</span>
                                        <i class="nhapthongtinvx-chosen-item__name-icon fas fa-times"></i>
                                    </div>

                                    <span className="nhapthongtinvx-chosen-item__price">14.604.000 VNĐ</span>
                                </div>
                                <div className="nhapthongtinvx_chosen_item_total">   
                                    <span className="nhapthongtinvx-chosen-item__tongtien_title">TỔNG TIỀN</span>
                                    <span className="nhapthongtinvx-chosen-item__tongtien_total">14.604.000 VNĐ</span>
                                </div>
                                <button type="button" className="btn btn-outline-primary nhapthongtinvx_chosen-item__xemdktt">XEM ĐIỀU KHOẢN VÀ THANH TOÁN</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default NhapThongTinVacXin_KHTT;