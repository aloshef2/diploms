import NavBar from "../NavBar/NavBar";
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    auth
} from '../../../_actions/user_actions';
import {Form,Input} from "antd";
import Axios from "axios";
import Footer from "../Footer/Footer";
import Visa from "./assets/visa_82066.png";
import Mastercard from "./assets/mastercard_82049.png";
import PayPal from "./assets/paypal_82081.png";
import { Link } from 'react-router-dom';

function ProfilePage(props) {
    
    const dispatch = useDispatch();
    const [User, setUser] = useState([]);

    console.log(User)

    useEffect(() => {

        if(props.user.userData) {
            dispatch(auth()).then(
                (user) => {
                    setUser(user.payload);
                }
            )
        }

    }, [props.user.userData])

    return (
        <div>
<div className="main-content-wrapper d-flex clearfix">

<NavBar />

<div className="cart-table-area section-padding-100">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">

                <div className="cart-title text-center">
                    <h2>Профиль</h2>
                </div>

                <Form >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                        <Input
                        placeholder="Имя"
                            className="form-control"
                            type="text"
                            value={User.firstName}
                        />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" value={User.lastName}  placeholder="Фамилия" />
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control" id="company" placeholder="Название компании" value={User.companyName}/>
                        </div>
                        <div className="col-12 mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" value={User.email} />
                        </div>
                        
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control mb-3" id="street_address" placeholder="Адрес" value={User.address} />
                        </div>
                        <div className="col-12 mb-3">
                            <input type="text" className="form-control" id="city" placeholder="Город" value={User.town} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="text" className="form-control" id="zipCode" placeholder="Почтовый индекс" value={User.zip} />
                        </div>
                        <div className="col-md-6 mb-3">
                            <input type="number" className="form-control" id="phone_number" min="0" placeholder="Телефон" value={User.phone}/>
                        </div>
                        <div className="col-12 mb-3">
                            <textarea name="comment" className="form-control w-100" id="comment" cols="30" rows="10" placeholder="О себе" value={User.about}></textarea>
                        </div>

                    </div>
                </Form>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="cart-summary">
                    <h5></h5>
                    <div className="mt-3">
                        <h1><Link to="/history" className="text-dark" style={{fontSize: "30px"}}>История покупок</Link></h1>
                        <h1><Link to="/delivery" className="text-dark" style={{fontSize: "30px"}}>Статус заказов</Link></h1>
                    </div>
                        

                    <div class="payment-method">
                        <div className="mt-5 mr-sm-2">
                            <h3 className="text-warning">Способы оплаты</h3>
                            <Link to="/creditcard"><img className="mr-2" src={Visa} /></Link>
                            <Link to="/creditcard"><img className="mr-2" src={Mastercard} /></Link>
                            <Link to="/creditcard"><img src={PayPal} /></Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
</div>
</div>
<Footer />
        </div>
        
    )
}

export default ProfilePage
