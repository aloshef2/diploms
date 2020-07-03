import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div>
            
            <footer class="footer_area clearfix">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12 col-lg-8">
                            <div class="single_widget_area">
                                <div class="footer_menu">
                                    <nav class="navbar navbar-expand-lg justify-content-end">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                                        <div class="collapse navbar-collapse" id="footerNavContent">
                                            <ul class="navbar-nav ml-auto">
                                                <li class="nav-item active">
                                                    <a class="nav-link" href="/">Домашняя</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/roboshop">Магазин</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/deliveryInformation">Доставка</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/requry">Возврат</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}

export default Footer
