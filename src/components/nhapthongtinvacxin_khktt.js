import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'

const NhapThongTinVacXin_KHKTT = () => {
    const [customer_name, setName] = useState('')
    const [customer_gender, setGender] = useState('')
    const [customer_dateofbirth, setDateofbirth] = useState('')
    const [customer_phone, setPhone] = useState('')
    const [customer_relationship, setRelationship] = useState('')
    const [customer_email, setEmail] = useState('')
    const [customer_city, setCity] = useState('')
    const [customer_address, setAddress] = useState('')
    const [customer_district, setDistrict] = useState('')
    const [customer_commune, setCommune] = useState('')
    const [customer_place, setPlace] = useState('')
    const [customer_vaccination_center, setVaccination_center] = useState('')


    // function AddLocalCustomer(){
    //     customers = {"customer_name":customer_name,"customer_gender":customer_gender,"customer_dateofbirth":customer_dateofbirth,"customer_phone":customer_phone,"customer_relationship":customer_relationship,
    //     "customer_email":customer_email,"customer_city":customer_city,"customer_address":customer_address,"customer_district":customer_district,"customer_commune":customer_commune,"customer_place":customer_place,"customer_vaccination_center":customer_vaccination_center}
    //     return customers
    // } 

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
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label className="form-check-label nhapthongtinvx_customertype" for="flexRadioDefault1">
                                        Quý khách là thành viên khách hàng thân thiết
                                    </label>
                                </Link>
                                <Link to="/nhapthongtinvacxin_khktt" className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label nhapthongtinvx_customertype" for="flexRadioDefault2">
                                        Quý khách chưa là thành viên khách hàng thân thiết
                                    </label>
                                </Link>
                            </div>
                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">
                                    THÔNG TIN NGƯỜI ĐƯỢC TIÊM
                                </span>
                                <span className="nhapthongtinvx_personalinfo-description">
                                    Quý khách có thể đăng ký cùng lúc cho tối đa 5 người tiêm, VNVC chỉ thực hiện tiêm chủng cho Khách hàng có thông tin đăng ký trùng khớp hoàn toàn với thông tin Quý Khách cung cấp tại đây.
                                </span>
                            </div>

                            <div className="row align-items-start">
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Nhập mã khách hàng tại VNVC
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Ngày tháng năm sinh
                                    </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input type="text" placeholder="Nhập mã khách hàng" className="form-control"/> 
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input type="date" placeholder="Ngày sinh" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-outline-primary nhapthongtinvx_btn_kiemtra">KIỂM TRA</button>
                                </div>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_kiemtra-note">
                                    Nếu đã có mã số tiêm chủng tại VNVC (mã khách hàng), vui lòng nhập mã tiêm chủng và ngày tháng năm sinh để tự động điền thông tin.
                                    Mã tiêm chủng VNVC là dãy số được in trên sticker dán trên sổ tiêm chủng.
                                </span>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Họ và tên *</span>
                                </div>
                                <div className="col-6">
                                <div>
                                    <span className="nhapthongtinvx_input-title">Mối quan hệ *</span>
                                    <div className="row"></div>
                                    <span className="nhapthongtinvx_mota-title">Khách hàng chỉ được đăng ký vắc xin cho người thân trong các quan hệ sau:</span>
                                </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group mb-3">
                                        <input
                                            type="text" 
                                            placeholder="Họ và tên" 
                                            className="form-control nhapthongtinvx_input-item"
                                            value={customer_name}
                                            onChange={(e)=> setName(e.target.value)}
                                            required
                                        />  
                                    </div>
                                </div>
                                <div className="col-6">
                                    <select value={customer_relationship} onChange={(e)=> setRelationship(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option selected>Chọn mối quan hệ</option>
                                        <option value="1">Bản thân</option>
                                        <option value="2">Cha</option>
                                        <option value="3">Mẹ</option>
                                        <option value="4">Ông</option>
                                        <option value="5">Bà</option>
                                        <option value="6">Anh</option>
                                        <option value="7">Chị</option>
                                        <option value="8">Em</option>
                                        <option value="9">Vợ</option>
                                        <option value="10">Chồng</option>
                                        <option value="11">Con</option>
                                        <option value="12">Cùng hộ khẩu</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Ngày sinh *</span>
                                </div>
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Giới tính *</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Ngày sinh" 
                                            className="form-control nhapthongtinvx_input-item"
                                            value={customer_dateofbirth}
                                            onChange={(e)=> setDateofbirth(e.target.value)}
                                            required
                                        />  
                                    </div>
                                </div>
                                <div className="col-6">
                                    <select className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option selected>Chọn giới tính</option>
                                        <option value="1">Nam</option>
                                        <option value="2">Nữ</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Số điện thoại *</span>
                                    <div className="row"></div>
                                    <span className="nhapthongtinvx_mota-title">Nếu người được tiêm chưa có SĐT, vui lòng điền SĐT của cha/mẹ hoặc người giám hộ sẽ nhận mã tiêm chủng</span>
                                </div>
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Email</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Số điện thoại" 
                                            className="form-control nhapthongtinvx_input-item"
                                            value={customer_phone}
                                            onChange={(e)=> setPhone(e.target.value)}
                                            required
                                        />  
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="email" 
                                            placeholder="Email" 
                                            className="form-control nhapthongtinvx_input-item"
                                            value={customer_email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                            required
                                        />  
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_input-title">Địa chỉ *</span>
                            </div>
        
                            <div className="row">
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        placeholder="Địa chỉ" 
                                        className="form-control nhapthongtinvx_input-item"
                                        value={customer_address}
                                        onChange={(e)=> setAddress(e.target.value)}
                                        required    
                                    />  
                                </div>
                            </div>
        
                            <div className="row align-items-start">
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Tỉnh/Thành *
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Phường/Huyện *
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Quận/Xã *
                                    </span>
                                </div>
                            </div>
        
                            <div className="row">
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Tỉnh/thành" 
                                            className="form-control"
                                            value={customer_city}
                                            onChange={(e)=> setCity(e.target.value)}
                                            required
                                        />  
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Quận/huyện" 
                                            className="form-control"
                                            value={customer_district}
                                            onChange={(e)=> setDistrict(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group mb-3">
                                        <input 
                                            type="text" 
                                            placeholder="Phường/xã" 
                                            className="form-control"
                                            value={customer_commune}
                                            onChange={(e)=> setCommune(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">CHỌN ĐỊA ĐIỂM MONG MUỐN TIÊM</span>
                            </div>
        
                            <div className="row">
                                <div className="col-6">
                                    <span className="nhapthongtinvx_input-title">Tỉnh/Thành *</span>
                                </div>
                                <div className="col-6">
                                <div>
                                    <span className="nhapthongtinvx_input-title">Trung tâm VNVC gần quý khách *</span>
                                </div>
                                </div>
                            </div>
        
                            <div className="row">
                                <div className="col-6">
                                    <select value={customer_city} onChange={(e)=> setCity(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option value="1">Thành Phố Hồ Chí Minh</option>
                                        <option value="2">Thành Phố Hà Nội</option>
                                        <option value="3">Thành Phố Đà Nẫng</option>
                                        <option value="4">Thành Phố Hải Phòng</option>
                                        <option value="5">Thành Phố Cần Thơ</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select value={customer_vaccination_center} onChange={(e)=> setVaccination_center(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option selected>Trung tâm VNVC</option>
                                        <option value="1">VNVC Bình Thạnh</option>
                                    </select>
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
                                    <button 
                                        // onClick={(e)=>localStorage.setItem("customers",AddLocalCustomer())} 
                                        type="button" className="btn btn-outline-primary nhapthongtinvx_btn_tieptuc">TIẾP TỤC</button>
                                </div>
                            </div>
                        </div>
0
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

export default NhapThongTinVacXin_KHKTT;