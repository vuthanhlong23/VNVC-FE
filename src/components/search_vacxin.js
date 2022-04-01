import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import axios from 'axios';

const Search_Vaccine = () => {
    //search vaccine
    let history = useHistory()  
    const [SearchVaccineList, setSearchVaccineList] = useState([]);
    
    useEffect(() => {
        const fetchSearchVaccineList = async () =>{
            try {
                const res = await axios.get(`https://localhost:44300/api/vaccine/getinfo/${localStorage.getItem("vaccine_name")}`) 
                                        .then(res => {
                                            setSearchVaccineList(res.data)    
                                            console.log(res.data)
                                        })
                                        .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
        } 
        fetchSearchVaccineList();
    }, [])

    const [vaccine_name, setVaccineName] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/search_vaccine");
        localStorage.setItem("vaccine_name",vaccine_name)
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

                                {SearchVaccineList.map(arr => {
                                    return (
                                        <div className="col-4 align-items-center">
                                            <div className="vacxin-package-item">
                                                <div className="vacxin-package-item__wrap">
                                                    <h4 className="vacxin-package-item__name">{arr.name}</h4>
                                                    <span className="vacxin-package-item__price"><i className="vacxin-package-item__icon fa fa-tag"></i>{arr.price} VNĐ</span>
                                                </div>
                                                <span className="vacxin-package-item__description1">Phòng bệnh:</span>
                                                <span className="vacxin-package-item__description2">{arr.function}</span>
                                                <button type="button" className="btn btn-outline-secondary vacxin-package-item_addcart_btn">CHỌN</button>
                                            </div>
                                        </div>
                                    )})}

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="vacxin-chosen-item">
                                <h4 className="vacxin-chosen-item__title"><i className="vacxin-chosen-item__icon far fa-clipboard-list"></i>DANH SÁCH VẮC XIN CHỌN MUA </h4>
                                <div className="vacxin-chosen-item__info">
                                    <div class="vacxin-chosen-item__name-wrap">
                                        <span class="vacxin-chosen-item__name">GÓI VẮC XIN INFRANRIX BFSB SDFGSDFG SDFGFDG SDFGSDFGDFS</span>
                                        <i class="vacxin-chosen-item__name-icon fas fa-times"></i>
                                    </div>

                                    <span className="vacxin-chosen-item__price">14.604.000 VNĐ</span>
                                </div>
                                <button type="button" className="btn btn-outline-secondary vacxin-chosen-item_dk_btn">ĐĂNG KÝ MŨI TIÊM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_Vaccine;