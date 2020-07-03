import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./assets/style.css"

function PayVariblsPage(){

    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div class="card" >
                                <i class="fas fa-credit-card"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Оплата онлайн картой</h5>
                                    <p class="card-text">Оплата осуществляеться онлайн с последующем получении товара.</p>
                                    <a href="/creditcard" class="btn btn-warning">Подключить карту</a>
                                </div>
                                </div>
                            </div>
                        <div className="col-3">
                            <div class="card" >
                                <i class="fas fa-wallet"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Наличный расчет</h5>
                                    <p class="card-text">Оплата осуществляеться на кассе при получении товара.</p>
                                    <a href="/paycash" class="btn btn-warning">Подробнее</a>
                                </div>
                                </div>
                            </div>
                        <div className="col-3">
                            <div class="card" >
                                <i class="fas fa-university"></i>
                                <div class="card-body">
                                    <h5 class="card-title">Банк</h5>
                                    <p class="card-text">Оплата осуществляеться кредитом банк.</p>
                                    <a href="/paybank" class="btn btn-warning">подробнее</a>
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

export default PayVariblsPage