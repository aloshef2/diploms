import NavBar from "../NavBar/NavBar";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    getCartItems,
    removeCartItem,
    onSuccessBuy
} from '../../../_actions/user_actions';
import UserCardBlock from './Section/UserCardBlock';
import { Result, Empty } from 'antd';
import Footer from "../Footer/Footer";

function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [Subtotal, setSubtotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

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
                    })
            }
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

    return (
        <div>
<div className="main-content-wrapper d-flex clearfix">

<NavBar />

<div className="cart-table-area section-padding-100">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="cart-title mt-50">
                    <h2>Корзина</h2>
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
            <div className="col-12 col-lg-4">
                <div className="cart-summary">
                    <h5>Итого</h5>
                    <ul className="summary-table">
                        <li><span>начальная цена:</span> <span>₽ {Subtotal}</span></li>
                        <li><span>доставка:</span> <span>Бесплатно</span></li>
                        <li><span>итоговая цена:</span> <span>₽ {Total}</span></li>
                    </ul>
                    <div className="mt-3">
                        <a href="/pay" className="btn btn-warning text-white w-100">Оплата</a>
                    </div>
                    <div className="mt-3">
                        <a href="/profile" className="btn btn-warning text-white w-100">Профиль</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
        {ShowTotal ?
            <div style={{ marginTop: '3rem' }}>
                <h2>итоговая цена: ₽ {Total}</h2>

            </div>
            :
            ShowSuccess ?
                <Result
                    status="success"
                    title=""
                /> :
                <div style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <br />
                    <p>Нет ничего в корзине</p>

                </div>
        }
        </div>
    </div>
</div>
</div>
<Footer />
        </div>
        
    )
}

export default CartPage
