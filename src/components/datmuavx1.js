import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import axios from 'axios';

const Datmuavx1 = () => {
    //search vaccine
    let history = useHistory()  
    const [VaccineList, setVaccineList] = useState([]);
    const [CartVaccineList, setCartVaccineList] = useState([]);
    useEffect(() => {
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
        fetchVaccineList();
        fetchCartVaccineList();
    }, [])

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


    const [vaccine_name, setVaccineName] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/search_vaccine");
        localStorage.setItem("vaccine_name",vaccine_name)
    }

    const handleSuccessfulAuth1 = () => {
        history.push("/nhapthongtinvacxin");
        localStorage.setItem("item",JSON.stringify(CartVaccineList))
    }


    return (
        <div>
            <div className="container_datmuavx1">
                <div className="grid">
                    <div className="row">
                        <div className="vacxin-package-info">
                            <div className="col-2">
                                <div className="vacxin-package-info__catalog">
                                    <i className="vacxin-package-info__catalog-icon fas fa-bars"></i>
                                    <span className="vacxin-package-info__catalog-title">Danh mục</span>
                                </div>
                            </div>
                            <div className="col-7">
                                <span className="vacxin-package-info__title">THÔNG TIN SẢN PHẨM VẮC XIN</span>
                            </div>
                            <div className="col-3">
                                <form className="vacxin-package-info__search d-flex">
                                    <input value={vaccine_name} onChange={(e)=> setVaccineName(e.target.value)} className="vacxin-package-info_search_form form-control me-2" type="search" placeholder="Tìm kiếm tên vắc xin.." aria-label="Search"/>
                                    <button onClick={() => handleSuccessfulAuth()}  
                                    type="submit" className="vacxin-package-info_search__btn btn btn-dark"><i className="vacxin-package-info_search__icon fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">

                                {VaccineList.map(arr => {
                                    return (
                                        <div className="col-4 align-items-center">
                                            <div className="vacxin-package-item">
                                                <div className="vacxin-package-item__wrap">
                                                    <h4 className="vacxin-package-item__name">{arr.name}</h4>
                                                    <span className="vacxin-package-item__price"><i className="vacxin-package-item__icon fa fa-tag"></i>{arr.price} VNĐ</span>
                                                </div>
                                                <span className="vacxin-package-item__description1">Phòng bệnh:</span>
                                                <span className="vacxin-package-item__description2">{arr.function}</span>
                                                <button onClick={()=>AddVaccineToCart(arr.id,arr.name,arr.price,arr.func,arr.description)}  type="button" className="btn btn-outline-secondary vacxin-package-item_addcart_btn">CHỌN</button>
                                            </div>
                                        </div>
                                    )})}

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="vacxin-chosen-item">
                                <h4 className="vacxin-chosen-item__title"><i className="vacxin-chosen-item__icon far fa-clipboard-list"></i>DANH SÁCH VẮC XIN CHỌN MUA </h4>
                                {CartVaccineList.map(cart => {
                                    return (
                                        <div className="vacxin-chosen-item__info">
                                            <div className="vacxin-chosen-item__name-wrap">
                                                <span className="vacxin-chosen-item__name">{cart.name}</span>
                                                <i onClick={()=>DeleteVaccineCart(cart.key)} className="vacxin-chosen-item__name-icon fas fa-times"></i>
                                            </div>

                                            <span className="vacxin-chosen-item__price">{cart.price} VNĐ</span>
                                        </div>
                                    )})}
                                
                                <button onClick={()=>handleSuccessfulAuth1()} type="button" className="btn btn-outline-secondary vacxin-chosen-item_dk_btn">ĐĂNG KÝ MŨI TIÊM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Datmuavx1;