import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot, DotGroup } from 'pure-react-carousel';

import { Row, Col } from 'antd';
import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./style.css"

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if (props.detail.images && props.detail.images.length > 0) {
            let images = [];

            props.detail.images && props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    }, [props.detail])

    const readerSlide  = Images.map((image, index) => {
        return (
                <Slide index={index}><img src={image.original} /></Slide>
                
        )
    })

    const readerVertical  = Images.map((image, index) => {
        return (
                <Dot className="DotImage" slide={index}><img className="image-dot-slide" src={image.original} /></Dot>
                
        )
    })

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={70}
            totalSlides={Images.length}
        >
        <Row >
                <Col lg={5} xs={5}>
                    <SimpleBar style={{height: "430px"}}>
                        {readerVertical}
                    </SimpleBar>
                    
                </Col>
                <Col lg={19} xs={19}>
                    <Slider>
                    {readerSlide}
                    
                    </Slider>
                    <DotGroup className="DotCarusel" />
                    <ButtonBack className="ButtonBack"><i className="fas fa-chevron-left"></i></ButtonBack>
                    <ButtonNext className="ButtonNext"><i className="fas fa-chevron-right"></i></ButtonNext>
                </Col>
            </Row>
        
            
      </CarouselProvider>
    )
}

export default ProductImage
