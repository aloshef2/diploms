import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {


    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    const addToFavouriteHandler = () => {
        props.addToFavourite(props.detail._id)
    }


    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }} class="btn-group" role="group" aria-label="Basic example">
                <Button size="large"  color="yelow" className="btn btn-warning"
                    onClick={addToCarthandler}
                >
                    В корзину
                    </Button>
                    <Button size="large" className="btn btn-success"
                    onClick={addToFavouriteHandler}
                >
                    Избраное
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
