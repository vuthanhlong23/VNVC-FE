import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/thanhtoan.css'



const Thanhtoan = () => {
    let history = useHistory()
    const [payment_name, setName] = useState('')
    const [payment_phone, setPhone] = useState('')
    const [payment_email, setEmail] = useState('')
    const [payment_cccd, setCCCD] = useState('')
    const [payment_address, setAddress] = useState('')
    const [payment_city, setCity] = useState('')
    const [payment_district, setDistrict] = useState('')
    const [payment_commune, setCommune] = useState('')
    const [payment_type, setType] = useState('');
    const [CartVaccineList, setCartVaccineList] = useState([]);
    useEffect(() => {
        const fetchCartVaccineList = async () =>{
            try {
                const res = await axios.get(`https://localhost:44300/api/cart/getcart/2`) 
                                        .then(res => {
                                            setCartVaccineList(res.data)    
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        } 
        fetchCartVaccineList();
    }, [])

    var total_money = 0
    const TotalAmount = (total) =>{
        total_money = total_money + total;
        localStorage.setItem("total_money",total_money)
    }
    const Payment = (event) =>{
        try {
            axios({
                url: `http://vnvc.somee.com/api/formregistor/insertformregistor`,
                method: 'post',
                    data:
                    {
                        customers: [
                            {
                                customer: JSON.parse(localStorage.getItem("customer")),
                                item: JSON.parse(localStorage.getItem("item"))
                            }
                        ],
                        payment_name: payment_name,
                        payment_phone: payment_phone,
                        payment_cccd: payment_cccd,
                        payment_email: payment_email,
                        payment_address: payment_address,
                        payment_city: payment_city,
                        payment_district: payment_district,
                        payment_commune: payment_commune,
                        payment_type: payment_type
                        
                    }
            },
            { withCredentials: true }
            )  
            .then(res => {
                history.push("/thongbao")
                console.log(res.data)
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch', error)
        }
        event.preventDefault();
    } 

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
                                        <input value={payment_name} onChange={(e)=> setName(e.target.value)}
                                         type="text" className="form-control payment_item_title" placeholder="Họ và tên *"/>
                                    </div>
                                    <div className="col-6">
                                        <input value={payment_phone} onChange={(e)=> setPhone(e.target.value)} 
                                        type="text" className="form-control payment_item_title" placeholder="Số điện thoại *"/>
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
                                        <input value={payment_email} onChange={(e)=> setEmail(e.target.value)} 
                                         type="text" className="form-control payment_item_title" placeholder="Email *"/>
                                    </div>
                                    <div className="col-6">
                                        <input value={payment_cccd} onChange={(e)=> setCCCD(e.target.value)} 
                                         type="text" className="form-control payment_item_title" placeholder="CMND/ CCCD/ PASSPORT *"/>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <span className="payment_buyer_input_title">
                                        Địa chỉ *
                                    </span>
                                </div>
                                <div className="row payment_items_address">
                                    <input value={payment_address} onChange={(e)=> setAddress(e.target.value)}  
                                    type="text" className="form-control payment_item_title" placeholder="Số nhà, tên đường (Theo hộ khẩu/CMND)"/>
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
                                        <input value={payment_city} onChange={(e)=> setCity(e.target.value)}  
                                        type="text" className="form-control payment_item_title" placeholder="Tỉnh/ thành *"/>
                                    </div>
                                    <div className="col-4">
                                        <input value={payment_district} onChange={(e)=> setDistrict(e.target.value)}  
                                        type="text" className="form-control payment_item_title" placeholder="Quận/Huyện *"/>
                                    </div>
                                    <div className="col-4">
                                        <input value={payment_commune} onChange={(e)=> setCommune(e.target.value)}  
                                        type="text" className="form-control payment_item_title" placeholder="Phường/Xã *"/>
                                    </div>
                                </div>
                                <div className="row payment_items">
                                    <span className="payment_type_title">
                                        CHỌN PHƯƠNG THỨC THANH TOÁN
                                    </span>
                                </div>
                                <div className="row">
                                    <div className="form-check">
                                        <input value={"Thanh toán bằng thẻ thanh toán nội địa (ATM)"} onChange={(e)=> setType(e.target.value)} className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ thanh toán nội địa (ATM)
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input value={"Thanh toán tại trung tâm"} onChange={(e)=> setType(e.target.value)} className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ VISA/MASTER/JCB
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input value={"Thanh toán tại trung tâm"} onChange={(e)=> setType(e.target.value)} className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán bằng thẻ thành viên
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input value={"Thanh toán tại trung tâm"} onChange={(e)=> setType(e.target.value)} className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán qua chuyển khoản
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input value={"Thanh toán tại trung tâm"} onChange={(e)=> setType(e.target.value)} className="form-check-input pament-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" checked/>
                                        <label className="form-check-label payment_check_type" >
                                            Thanh toán tại trung tâm
                                        </label>
                                      </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="payment_vacxin-chosen-item">
                                    <h4 className="payment_vacxin-chosen-item__title"><i className="payment_vacxin-chosen-item__icon far fa-clipboard-list"></i>DANH SÁCH VẮC XIN CHỌN MUA </h4>
                                    {CartVaccineList.map(cart => {
                                        return (
                                            <div>
                                                <div className="payment_vacxin-chosen-item__info">
                                                <span className="payment_vacxin-chosen-item__name">{cart.name}</span>
                                                <span className="payment_vacxin-chosen-item__price">{cart.price} VNĐ</span>
                                                </div>
                                                <div className="payment_vacxin-chosen-item__local">
                                                    <span className="payment_vacxin-chosen-item__local_address">{cart.vaccine_center}</span>
                                                    <span className="payment_vacxin-chosen-item__location">{cart.place}</span>
                                                </div>
                                                <script>
                                                    {TotalAmount(cart.price)}
                                                </script>
                                            </div>
                                        )})}
                                    
                                    <div className="payment_vacxin-chosen-item__total">
                                        <span className="payment_vacxin-chosen-item__name__total">TỔNG TIỀN</span>
                                        <span className="payment_vacxin-chosen-item__price__total">{localStorage.getItem("total_money")} VNĐ</span>
                                    </div>
                                    
                                    <form onSubmit={Payment}>
                                        <button type="submit" className="btn btn-outline-secondary payment_vacxin-chosen-item_dk_btn">THANH TOÁN</button>
                                    </form>

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