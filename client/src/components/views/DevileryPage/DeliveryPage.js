import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


function RulesPage(props){

    console.log(props.user)

    return(
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

                <div className="cart-table-area section-padding-100">
                    <div className="container-fluid">
                    <div style={{ textAlign: 'center' }}>
                    <h1>Доставка товара</h1>
                </div>
                    <div class="cart-table clearfix pt-5">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>ID </th>
                                    <th>Цена</th>
                                    <th>Адрес</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>

                            <tbody>

                                {props.user.userData && props.user.userData.delivery &&
                                    props.user.userData.delivery.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.price}</td>
                                            <td>{item.address}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    ))}


                            </tbody>
                    </table>
                </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default RulesPage