import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import NavBar from "../NavBar/NavBar";
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductButton from './Sections/ProductButton';
import { addToCart, addToFavourite } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "./Sections/style.css";
import 'react-tabs/style/react-tabs.css';


import "./Sections/style.css"

function DetailProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    const [Product, setProduct] = useState([]);
    console.log(Product)
    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }

    const addToFavouriteHandler = (productId) => {
        dispatch(addToFavourite(productId))
    }

    return (<div>
                <div className="main-content-wrapper d-flex clearfix">

                <NavBar />

                <div className="cart-table-area section-padding-100">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-12">
                                <nav className="" aria-label="breadcrumb">
                                    <ol class="breadcrumb mt-50">
                                        <li class="breadcrumb-item"><a href="/catalog">Home</a></li>
                                        <li class="breadcrumb-item"><Link to={"/roboshop/"+Product.category} >{Product.category}</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">{Product.title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-lg-7">
                                    <ProductImage detail={Product} />
                            </div>
                            <div class="col-12 col-lg-5">
                                <div class="single_product_desc">
                                    <div class="product-meta-data">
                                        <div class="line"></div>
                                        <p class="product-price">₽ {Product.price}</p>
                                        
                                            <h6>{Product.title}</h6>
                                        
                                        <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                            <div className="ratings-cart text-right">
                                                <div className="ratings">
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div class="cart-btn d-flex mb-50">
                                    <ProductButton 
                                    addToCart={addToCartHandler}
                                    addToFavourite={addToFavouriteHandler}
                                    detail={Product}
                                    />
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div className="bg-warning p-5 mb-5"></div>
            <section>
                <div className="container mb-5">
                <Tabs>
                    <TabList>
                    <Tab>Описание</Tab>
                    <Tab>Храктеристики</Tab>
                    </TabList>
                
                    <TabPanel>
                        <div className="row">
                            <div className="col-6 mt-5 p-5 mb-5">
                            {Product.description}
                            </div>
                        </div>
                        
                    </TabPanel>
                    <TabPanel>
                        <div className="row">
                            <div className="col-6 mt-5 p-5 mb-5">
                            {Product.informations}
                            </div>
                        </div>
                        
                    </TabPanel>
                </Tabs>
                </div>
            </section>
        <Footer />
        </div>
    
    )
}

export default DetailProductPage
