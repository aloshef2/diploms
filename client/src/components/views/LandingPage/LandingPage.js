import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row, Input } from 'antd';
import ImageSlider from '../../utils/ImageSlider';
import RadioBox from './Sections/RadioBox';
import RadioBoxCategory from './Sections/RadioBoxCategory';
import CheckBox from "./Sections/CheckBox";
import Footer from "../Footer/Footer";
import {  price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import NavBar from '../NavBar/NavBar';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const LimitValue = [
    {value: 4, label: "4"},
    {value: 6, label: "6"},
    {value: 10, label: "10"},
    {value: 14, label: "14"},
    {value: 18, label: "18"},
]

function LandingPage(props) {

    

    const [Products, setProducts] = useState([]);
    const [Category, setCategory] = useState([]);
    const [Brend, setBrend] = useState([]);;
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(4)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")
    const [Show, setShow] = useState(true)

    const [Filters, setFilters] = useState({
        brend: [],
        category: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)
        getBrend();
        getCategory();
        handleFilters(props.match.params.category, "category")
    }, []);

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

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

    const getBrend = () => {
        Axios.get('/api/brend/getBrend')
            .then(response => {
                if (response.data.success) {
                    
                        setBrend(response.data.brend)
                } else {
                    alert('Failed to fectch product datas')
                }
            });
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms
        }
        getProducts(variables)
        setSkip(skip)
    }

    

    const renderCards = Products.map((product, index) => {

        return   <div className="col-md-12 col-lg-12 col-6 col-xl-6 p-3">
        <div className="card">
        <div className="single-product-wrapper m-3">
            <div className="product-img" >
                <Link to={`/product/${product._id}`}>
                    <ImageSlider images={product.images} />
                </Link>
                
            </div>
            <div className="product-description d-flex align-items-center justify-content-between">
                <div className="product-meta-data">
                    <div className="line"></div>
                    <p className="product-price text-left">₽ {product.price}</p>
                        <Link to={`/product/${product._id}`}><h6 className="text-break text-left">{product.title}</h6></Link>
                        <div className="ratings-cart text-left">
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
        </div>
        </div>
        
    </div>
    })

    const renderList = Products.map((product, index) => {

        return   <div class="card col-12 m-4" >
            <div class="row no-gutters single-product-wrapper m-3">
                <div class="col-4 col-lg-12 col-xl-6 col-sm-12" >
                <Link to={`/product/${product._id}`} >
                    <ImageSlider images={product.images} />
                </Link>
                </div>
                <div class="col-8 col-lg-12 col-xl-6 col-sm-12">
                <div class="card-body product-description">

                    <div className="product-meta-data">
                    <div className="line"></div>
                    <p className="product-price text-left">₽ {product.price}</p>
                        
                    </div>
                    <Link to={`/product/${product._id}`}><h6 className="text-break">{product.title}</h6></Link>
                    <div className="ratings-cart text-left">
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
            </div>
        </div>
    })


    


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        return array
    }

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }


        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const setLimitSelectChange = (event) => {

        const variables = {
            skip: 0,
            limit: event.value,
            filters: Filters,
            searchTerm: SearchTerms
        }
        setSkip(0)
        setLimit(event.value);
        getProducts(variables)
    }

    const setShowChange = (value) => {
        console.log(value);
        setShow(value);
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <div>
            <div className="main-content-wrapper d-flex clearfix">

            <NavBar />

            <div className="shop_sidebar_area fixed-left">
            <div className="pt-5 pb-5">
            <SearchFeature
                refreshFunction={updateSearchTerms}
            />
            </div>

            <div className="widget catagory mb-50">
                <h6 className="widget-title mb-30">Категория</h6>

                <div className="catagories-menu">
                    <ul>
                        <RadioBoxCategory
                            list={Category}
                            value={Filters}
                            handleFilters={filters => handleFilters(filters, "category")}
                        />
                    </ul>
                </div>
            </div>

            <div className="widget brands mb-50">
                <h6 className="widget-title mb-30">Производитель</h6>

                <div className="catagories-menu">
                    <ul>
                        <CheckBox 
                        list={Brend}
                        handleFilters={filters => handleFilters(filters, "brend")}
                        />
                    </ul>
                </div>
            </div>

            <div className="widget price mb-50">
                <h6 className="widget-title mb-30">Цена</h6>

                <div className="widget-desc">
                    <div className="slider-range">
                        <RadioBox
                            list={price}
                            handleFilters={filters => handleFilters(filters, "price")}
                        />
                    </div>
                </div>
            </div>
            </div>

            <div className="amado_product_area section-padding-100">
            <div className="container-fluid">

                <div className="row">

                <div className="col-12">
                        <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                            <div className="total-products">
                                <p>Показывает {Limit} из 18</p>
                                <div className="view d-flex">
                                    <button className="btn" onClick={() => setShowChange(true)}><i className="fa fa-th-large" aria-hidden="true"></i></button>
                                    <button className="btn" onClick={() => setShowChange(false)}><i class="fa fa-bars" aria-hidden="true"></i></button>
                                </div>
                            </div>
                            <div className="product-sorting d-flex">
                                <div className="view-product d-flex align-items-center" style={{width: "110px"}}>
                                    
                                    <form className="w-100">
                                        <Select
                                            placeholder="Кол-во"
                                            onChange={setLimitSelectChange}
                                            options={LimitValue}
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                        </div>
                        {Products.length === 0 ?
                        <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                            <h2>Нет роботов...</h2>
                        </div> :
                        <div >
                            {Show ?
                                <div className="row">
                                    {renderCards}
                                </div>
                                
                                :
                                <div>
                                    {renderList}
                                </div>
                            }
                            

                            

                        </div>
                    }
                    <br /><br />

                    {PostSize >= Limit &&
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="btn" onClick={onLoadMore}>Показать еще</button>
                        </div>
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </div>      
    )
}

export default LandingPage
