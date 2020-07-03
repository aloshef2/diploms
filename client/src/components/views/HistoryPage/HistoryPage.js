import React from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from "../Footer/Footer";

function HistoryPage(props) {


    return (
        <div>
<div className="main-content-wrapper d-flex clearfix">
            <NavBar />
            <div class="cart-table-area section-padding-100">
                <div class="container-fluid">
                <div style={{ textAlign: 'center' }}>
                    <h1>История</h1>
                </div>
                    <div class="cart-table clearfix pt-5">
                        <table class="table table-responsive">
                            <thead>
                                <tr>
                                    <th>ID </th>
                                    <th>Цена</th>
                                    <th>Куда</th>
                                    <th>Статус</th>
                                </tr>
                            </thead>

                            <tbody>

                                {props.user.userData && props.user.userData.history &&
                                    props.user.userData.history.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.price}</td>
                                            <td>{item.address}</td>
                                            <td>{item.dateOfPurchase}</td>
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

export default HistoryPage
