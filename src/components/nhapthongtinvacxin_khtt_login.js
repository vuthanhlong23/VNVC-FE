import React, {Fragment, useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../fonts/fontawesome-free-5.15.3-web/css/all.min.css';
import '../assets/stylesheets/datmuavx1.css'
import '../assets/stylesheets/base.css'
import '../assets/stylesheets/nhapthongtinvx.css'
import axios from 'axios';

const NhapThongTinVacXin_KHKTT_Login = () => {
    // const [name, setName] = useState('')
    const [vaccine, setVaccine] = useState({})
    const [gender, setGender] = useState('')
    // const [dateofbirth, setDateofbirth] = useState('')
    // const [phone, setPhone] = useState('')
    const [relationship, setRelationship] = useState('')
    // const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [district, setDistrict] = useState('')
    const [commune, setCommune] = useState('')
    const [place, setPlace] = useState('')
    const [vaccination_center, setVaccination_center] = useState('')
    let history = useHistory()
    const [VaccineList, setVaccineList] = useState([]);
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

    function AddLocalCustomer(){
        let customer = {"name":JSON.parse(localStorage.getItem("Loyal_customer")).name,"gender":JSON.parse(localStorage.getItem("Loyal_customer")).gender,"dateofbirth":JSON.parse(localStorage.getItem("Loyal_customer")).date_of_birth,"phone":JSON.parse(localStorage.getItem("Loyal_customer")).phone,"relationship":relationship,
        "email":JSON.parse(localStorage.getItem("Loyal_customer")).email,"city":JSON.parse(localStorage.getItem("Loyal_customer")).city,"address":JSON.parse(localStorage.getItem("Loyal_customer")).address,"district":JSON.parse(localStorage.getItem("Loyal_customer")).district,"commune":JSON.parse(localStorage.getItem("Loyal_customer")).commune,"place":place,"vaccination_center":vaccination_center}
        return customer
    } 

    function handleSuccessfulAuth(){
        localStorage.setItem("customer",JSON.stringify(AddLocalCustomer()))
        alert("Thêm thành công!")
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
                                <span className="nhapthongtinvx_personalinfo-title">
                                    THÔNG TIN NGƯỜI ĐƯỢC TIÊM
                                </span>
                                <span className="nhapthongtinvx_personalinfo-description">
                                    Quý khách có thể đăng ký cùng lúc cho tối đa 5 người tiêm, VNVC chỉ thực hiện tiêm chủng cho Khách hàng có thông tin đăng ký trùng khớp hoàn toàn với thông tin Quý Khách cung cấp tại đây.
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).name}
                                        />  
                                        </div> 
                                </div>
                                <div className="col-6">
                                    <select value={relationship} onChange={(e)=> setRelationship(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option selected>Chọn mối quan hệ</option>
                                        <option value="Bản Thân">Bản thân</option>
                                        <option value="Cha">Cha</option>
                                        <option value="Mẹ">Mẹ</option>
                                        <option value="Ông">Ông</option>
                                        <option value="Bà">Bà</option>
                                        <option value="Anh">Anh</option>
                                        <option value="Chị">Chị</option>
                                        <option value="Em">Em</option>
                                        <option value="Vợ">Vợ</option>
                                        <option value="Chồng">Chồng</option>
                                        <option value="Con">Con</option>
                                        <option value="Cùng Hộ Khẩu">Cùng hộ khẩu</option>
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).date_of_birth.substring(0,10)}
                                            required
                                        />  
                                    </div>
                                </div>
                                <div className="col-6">
                                    <input 
                                            type="text" 
                                            placeholder="Ngày sinh" 
                                            className="form-control nhapthongtinvx_input-item"
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).gender}
                                            required
                                        />
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).phone}
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).email}
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
                                        value={JSON.parse(localStorage.getItem("Loyal_customer")).address}
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
                                        Quận/Huyện *
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span className="nhapthongtinvx_input-title">
                                        Phường/Xã *
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).city}
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).district}
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
                                            value={JSON.parse(localStorage.getItem("Loyal_customer")).commune}
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
                                    <select value={place} onChange={(e)=> setPlace(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option value="Thành Phố Hồ Chí Minh">Thành Phố Hồ Chí Minh</option>
                                        <option value="Thành Phố Hà Nội">Thành Phố Hà Nội</option>
                                        <option value="Thành Phố Đà Nẵng">Thành Phố Đà Nẵng</option>
                                        <option value="Thành Phố Hải Phòng">Thành Phố Hải Phòng</option>
                                        <option value="Thành Phố Cần Thơ">Thành Phố Cần Thơ</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select value={vaccination_center} onChange={(e)=> setVaccination_center(e.target.value)} className="form-select nhapthongtinvx_input-item" aria-label="Default select example">
                                        <option selected>Trung tâm VNVC</option>
                                        <option value="VNVC Bình Thạnh">VNVC Bình Thạnh</option>
                                        <option value="VNVC Thủ Đức">VNVC Thủ Đức</option>
                                        <option value="VNVC Tân Bình">VNVC Tân Bình</option>
                                        <option value="VNVC Quận 2">VNVC Quận 2</option>
                                    </select>
                                </div>
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
                                    <button 
                                        onClick={()=>handleSuccessfulAuth()} 
                                        type="button" className="btn btn-outline-primary nhapthongtinvx_btn_tieptuc">TIẾP TỤC</button>
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

                                            <span className="nhapthongtinvx-chosen-item__price">{cart.price} VN
                                            Đ</span>
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

export default NhapThongTinVacXin_KHKTT_Login;