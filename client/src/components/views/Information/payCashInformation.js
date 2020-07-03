import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


function PayCashInformation(){

    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="mb-5">Наличный расчет</h2>
                            <p>
                            Цена Товара/Услуги указывается рядом с определённым наименованием Товара/Услуги в Интернет-магазине.
                            </p>
                            <p>
                            Цена Товара/Услуг указывается в рублях Российской Федерации и включает в себя налог на добавленную стоимость.
                            </p>
                            <p>
                            Цена Товара/Услуги в Интернет-магазине может быть изменена Продавцом в одностороннем порядке. Цена товара действительна на момент подтверждения заказа Покупателем. При этом цена на заказанный Покупателем Товар изменению не подлежит.
                            </p>
                            <p>
                            Оплата Заказа возможна после подтверждения Заказа Продавцом.
                            </p>
                            <p>
                            Оплата Заказа Покупателем производится в рублях.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )

}

export default PayCashInformation