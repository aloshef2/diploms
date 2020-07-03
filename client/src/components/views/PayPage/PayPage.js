import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    getCartItems,
    removeCartItem,
    onSuccessBuy,
    auth
} from '../../../_actions/user_actions';
import UserCardBlock from './Components/UserCardBlock';
import { Result, Empty } from 'antd';
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import {Form,Input} from "antd";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';




function PayPage(props){

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [Subtotal, setSubtotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [User, setUser] = useState([]);



    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => {
                        if (response.payload.length > 0) {
                            calculateTotal(response.payload)
                            calculateSubtotal(response.payload)
                        }
                    }
                )
            }
        }

        if(props.user.userData) {
            dispatch(auth()).then(
                (user) => {
                    setUser(user.payload);
                }
            )
        }

    }, [props.user.userData])


    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotal(total)
        setShowTotal(true)
        setShowSuccess(true)
    }

    const calculateSubtotal = (cartDetail) => {
        let subtotal = 0;

        cartDetail.map(item => {
            subtotal += parseInt(item.price, 10) * item.quantity
        });

        setSubtotal(subtotal)
        setShowTotal(true)
    }


    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    setShowTotal(false)
                } else {
                    calculateTotal(response.payload.cartDetail)
                    calculateSubtotal(response.payload.cartDetail)
                }
            })
    }


    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="row">
                <div className="col-12 col-lg-8">
                        <div className="cart-title text-center mb-5">
                            <h1>Оплата</h1>
                        </div>

                        <div className="cart-table clearfix">
                            <table className="table table-responsive">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Название</th>
                                        <th>Цена</th>
                                        <th>Количество</th>
                                    </tr>
                                </thead>
                                <UserCardBlock
                            products={props.user.cartDetail}
                            removeItem={removeFromCart}
                            />
                                {ShowSuccess ?
                            
                        null
                        :    
                        <div className="pt-5">
                            <Empty description={false} />
                        </div>
                            }
                                
                                    
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                    <div className="checkout_details_area mt-50 clearfix">

                        <div className="cart-title text-center">
                            <h2>Данные для отправки</h2>
                        </div>

                        <Form >
                            <div className="row">
                                <div className="col-12 mb-3">
                                <Input
                                placeholder="Имя"
                                    className="form-control"
                                    type="text"
                                    value={User.firstName}
                                />
                                </div>
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control" value={User.lastName}  placeholder="Фамилия" />
                                </div>                                
                                <div className="col-12 mb-3">
                                    <input type="number" className="form-control" id="phone_number" min="0" placeholder="Телефон" value={User.phone}/>
                                </div>

                            </div>
                        </Form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                    <div className="checkout_details_area mt-50 clearfix">

                        <div className="cart-title text-center">
                            <h2>Дотавка</h2>
                        </div>
                            <Form >
                                <div className="row">
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control text-warning  mb-3" id="street_address" placeholder="Адрес" value={User.address} />
                                </div>
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control" id="city" placeholder="Город" value={User.town} />
                                </div>
                                <div className="col-12 mb-3">
                                    <input type="text" className="form-control" id="zipCode" placeholder="Почтовый индекс" value={User.zip} />
                                </div>
                                
                                </div>
                            </Form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                    <div className="checkout_details_area mt-50 clearfix">

                        <div className="cart-title text-center">
                            <h2>Способ оплаты</h2>
                        </div>
                            <Form >
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation2" name="pay" required />
                                            <label class="custom-control-label" for="customControlValidation2">Наличный</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="customControlValidation3" name="pay" required />
                                            <label class="custom-control-label" for="customControlValidation3">Без наличный</label>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8 ">
                            <button type="submit" className="btn float-right btn-warning text-white">Оплатить</button>
                        
                    </div>
                </div>
            </div>
            </div>
            
            <Footer />
        </div>
    )

}

export default PayPage