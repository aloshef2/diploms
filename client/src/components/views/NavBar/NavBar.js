import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';

import CartMenu from "./Sections/cart"
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';

function NavBar() {

  return (
    <div >

        <div className="mobile-nav">
            <div className="amado-navbar-brand">
                <a href="/"></a>
            </div>
            <div className="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>
        <header className="header-area  clearfix">
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            <div className="logo">
                <a href="/"></a>
            </div>
            <nav className="amado-nav">
                <ul>
                    <li><a href="/">Домашняя</a></li>
                    <li ><a href={"/roboshop"} >Магазин</a></li>
                    <RightMenu />
                </ul>
            </nav>
            <div class="amado-btn-group mt-30 mb-100">
                <a href="/deliveryInformation" class="btn btn-warning amado-btn mb-15">Доставка</a>
                <a href="/payvaribls" class="btn amado-btn active">Оплата</a>
            </div>
            <div className="cart-fav-search mb-100">
                <CartMenu />
                <a href="/favourite" className="fav-nav">Избраное</a>
            </div>
        </header>
    </div>
  )
}

export default NavBar