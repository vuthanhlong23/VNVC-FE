import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'
import axios from 'axios';

const NhapThongTinVacXin = () => {
    let history = useHistory()
    const [loyal_customer_id, setLoyalCustomer] = useState('')
    const [vaccine, setVaccine] = useState({})
    const [CartVaccineList, setCartVaccineList] = useState([]);
    const [VaccineList, setVaccineList] = useState([]);
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
        const fetchVaccineList = async () =>{
            try {
                const res = await axios.get(`http://vnvc.somee.com/api/vaccine/getall`) 
                                        .then(res => {
                                            setVaccineList(res.data)    
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        } 
        fetchVaccineList()
        fetchCartVaccineList()
    }, [])

    function handleSuccessfulAuth(){
        localStorage.setItem("loyal_customer_id", loyal_customer_id)
        history.push("/nhapthongtinvacxin_khtt_login")
    }

    const fetchCustomer = async (id) =>{
        try {
            const res = await axios.get(`http://vnvc.somee.com/api/loyalcustomer/getinfo/${id}`) 
                                    .then(res => {
                                        if(res.data)
                                        {
                                            handleSuccessfulAuth()
                                            localStorage.setItem("Loyal_customer",JSON.stringify(res.data))
                                            
                                        } 
                                        else alert("Mã thẻ thành viên không tồn tại!")
                                    })
                                    .catch(err => console.log(err));
        } catch (error) {
            console.log('Failed to fetch store list', error)
        }
    } 

    const AddVaccineToCart = (id,name,price,func,description,event) =>{
        try {
            axios({
                url: `https://localhost:44300/api/cart/addcart/2`,
                method: 'post',
                data:
                {
                    id: id,
                    name: name,
                    price: price,
                    function: func,
                    description: description,
                    active: true,
                    create_date: "2022-03-29T17:00:00Z"
                }
            },
            { withCredentials: true }
            )
            .then(res => {
                if(res.data===1)
                {
                    alert("Thêm sản phẩm thành công")
                    window.location.reload()
                }
                else alert("Sản phẩm đã tồn tại trong giỏ hàng")
            })
            .catch(err => console.log(err)
            );
        } catch (error) {
            console.log('Failed', error)
        }
        event.preventDefault();
    } 

    const DeleteVaccineCart = async (key) =>{
        try {
            const res = await axios(`https://localhost:44300/api/cart/deleteitem/${key}`,
                {method: 'delete'
            },
            { withCredentials: true }
            )
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.log(err)
            );
        } catch (error) {
            console.log('Failed', error)
        }
    } 

    function AddLocalVaccine(id,name,price,func,description){
        let vaccine = {"id":id,"name":name,"price":price,"function":func,"description":description}
        return vaccine
    }

    var total_money = 0
    const TotalAmount = (total) =>{
        total_money = total_money + total;
        localStorage.setItem("total_money",total_money)
    }

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
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label className="form-check-label nhapthongtinvx_customertype" for="flexRadioDefault2">
                                        Quý khách chưa là thành viên khách hàng thân thiết
                                    </label>
                                </Link>
                            </div>
                            
                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">CHỌN VẮC XIN CHO NGƯỜI TIÊM</span>
                                <span className="nhapthongtinvx_mota-title">Quý khách có thể đăng ký thêm các loại vắc xin khác và sử dụng cho nhiều lần tiêm khác nhau.</span>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <select value={vaccine} onChange={(e)=>setVaccine(e.target.value)} className="form-select nhapthongtinvx_chosen_vacxin-item" aria-label="Default select example">
                                    {VaccineList.map(arr => {
                                        return (
                                            <option value={JSON.stringify(AddLocalVaccine(arr.id,arr.name,arr.price,arr.function,arr.description))}>{arr.name}</option>
                                        )})}
                                        
                                    </select>
                                </div>
                                <div className="col-4">
                                    <button onClick={()=>AddVaccineToCart(JSON.parse(vaccine).id,JSON.parse(vaccine).name,JSON.parse(vaccine).price,JSON.parse(vaccine).func,JSON.parse(vaccine).description)}  type="button" className="btn btn-outline-primary nhapthongtinvx_btn_kiemtra">THÊM VẮC XIN</button>        
                                </div>
                            </div>

                            <div className="row">
                                <span className="nhapthongtinvx_personalinfo-title">DANH SÁCH VẮC XIN ĐĂNG KÝ</span>
                            </div>

                            <div className="row">
                            {CartVaccineList.map(cart => {
                                return (
                                    <div className="col-4 align-items-center">
                                    <div className="nhapthongtinvx-package-item">
                                        <div className="nhapthongtinvx-package-item__wrap">
                                            <h4 className="nhapthongtinvx-package-item__name">{cart.name}</h4>
                                            <span className="nhapthongtinvx-package-item__price"><i className="nhapthongtinvx-package-item__icon fa fa-tag"></i>{cart.price} VNĐ</span>
                                        </div>
                                        <span className="nhapthongtinvx-package-item__description1">Phòng bệnh:</span>
                                        <span className="nhapthongtinvx-package-item__description2">{cart.function} </span>
                                    </div>       
                                </div>
                                )})}
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
                                {CartVaccineList.map(cart => {
                                return (
                                    <div>
                                        <div className="nhapthongtinvx-chosen-item__info">
                                            <div class="vacxin-chosen-item__name-wrap">
                                                <span class="nhapthongtinvx-chosen-item__name">{cart.name}</span>
                                                <i onClick={()=> DeleteVaccineCart(cart.key)} class="nhapthongtinvx-chosen-item__name-icon fas fa-times"></i>
                                            </div>

                                            <span className="nhapthongtinvx-chosen-item__price">{cart.price} VNĐ</span>
                                        </div>
                                        <script>
                                            {TotalAmount(cart.price)}
                                        </script>
                                    </div>
                                )})}
                                <div className="nhapthongtinvx_chosen_item_total">   
                                    <span className="nhapthongtinvx-chosen-item__tongtien_title">TỔNG TIỀN</span>
                                    <span className="nhapthongtinvx-chosen-item__tongtien_total">{localStorage.getItem("total_money")} VNĐ</span>
                                </div>
                                <button onClick={()=> history.push("/thanhtoan")} type="button" className="btn btn-outline-primary nhapthongtinvx_chosen-item__xemdktt">XEM ĐIỀU KHOẢN VÀ THANH TOÁN</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default NhapThongTinVacXin;