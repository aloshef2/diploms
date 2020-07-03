import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import NavBar from "../NavBar/NavBar";
import ImageSlider from '../../utils/ImageSlider';
import {Link} from "react-router-dom";
import Robots from "./Components/2016-04-28T143740Z_778155331_D1AETAZIHWAA_RTRMADP_3_FRANCE-SCIENCE.jpg";
import Promt from "./Components/promt.jpg";
import Social from "./Components/social-robots.jpg";
import Funy from "./Components/funy-robots.jpg";
import Footer from "../Footer/Footer";

function CatalogPage(props) {

    const [Category, setCategory] = useState([])

    useEffect(() => {

       

        getCategory()

    }, [])

    console.log(props.match);


    const getCategory = () => {
        Axios.post('/api/category/getCategory')
            .then(response => {
                if (response.data.success) {
                        setCategory(response.data.category)
                } else {
                    alert('Failed to fectch product datas')
                }
            });
    }

    const renderCards = Category.map((category, index) => {

        return   <div className="w-100 h-100 col-12 col-sm-12 col-md-12 col-lg-4">
        <Link to={"/roboshop/"+category.label} >
            <div>
                <ImageSlider images={category.images} />
                <h4 class="text-center text-warning mb-4">{category.title}</h4>
            </div>
        </Link>
    </div>
    })


 return(
    <div>
        <section id="hero" class="text-white tm-font-big tm-parallax">
        
        <div class="text-center tm-hero-text-container">
            <div class="tm-hero-text-container-inner">
                <h2 class="tm-hero-title text-warning">roboshop</h2>
            </div>        
        </div>

        <div class="tm-next tm-intro-next">
            <a href="#introduction" class="text-center tm-down-arrow-link">
            <i class="fas fa-3x fa-caret-down tm-down-arrow"></i>
            </a>
        </div>      
        </section>
        
        

        <div className="main-content-wrapper d-flex clearfix">

        <NavBar />

            <div className="cart-table-area section-padding-100">
                <div className="row">
                <section id="introduction" class="tm-section-pad-top">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-6 col-12">
                            <img src={Robots} alt="Image" class="img-fluid tm-intro-img" />
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="tm-intro-text-container">
                                <h2 class="text-warning mb-4 tm-section-title">Роботы -</h2>
                                <p class="mb-4 tm-intro-text">
                                Автоматическое устройство, предназначенное для осуществления различного рода механических операций, которое действует по заранее заложенной программе.
                                </p>
                                <p class="mb-5 tm-intro-text">
                                Внешний вид роботов разнообразен по форме и содержанию, может быть каким угодно, хотя нередко в конструкциях узлов заимствуют элементы анатомии различных живых существ, подходящие для выполняемой задачи. </p>
                                <div class="tm-next">
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className="container">
                            <div class="row tm-section-pad-top">
                                
                                {renderCards}
                                
                            </div>
                        </div>
                    
                    </div>

                    

                    
                </section>
                </div>
                
            </div>
        </div>

        <div className="container-fluid section-padding-100" id="section-line"></div>

        <div className="container section-padding-100">
            <section class="row tm-section" >
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0" >
                    <div class="flex-center p-5 bg-warning tm-section-min-h h-100" >
                        <h1 class="text-white">Промышленые -</h1>
                        <p class="text-white">
                        Промы́шленный ро́бот — предназначенный для выполнения двигательных и управляющих функций в производственном процессе манипуляционный робот, т. е. автоматическое устройство, состоящее из манипулятора и перепрограммируемого устройства управления.
                        </p>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    <div class="tm-flex-center p-5">
                    <img src={Promt} alt="Image" class="img-fluid tm-intro-img" />
                    </div>
                </div>
            </section>
            <section class="row tm-section" >
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0" >
                    <div class="flex-center p-5 tm-section-min-h" >
                    <img src={Social} alt="Image" class="img-fluid tm-intro-img" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    <div class="tm-flex-center p-5 bg-warning h-100">
                    <h1 class="text-white">Социальный —</h1>
                    <q class="text-white"> робот, способный в автономном или полуавтономном режиме взаимодействовать и общаться с людьми в общественных местах.</q>
                    </div>
                </div>
            </section>
            <section class="row tm-section" >
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0" >
                    <div class="flex-center p-5 bg-warning tm-section-min-h h-100" >
                        <h1 class="text-white">Игрушки -</h1>
                        <p class="text-white">
                        Роботы созданные, чтобы дарить радость
                        </p>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" >
                    <div class="tm-flex-center p-5">
                    <img src={Funy} alt="Image" class="img-fluid tm-intro-img" />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </div>
    
 )
}

export default CatalogPage