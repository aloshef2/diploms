import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td className="cart_product_img">
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td>
                <td className="name">
                    <span>$ {product.title}</span>
                </td>
                <td className="price">
                    <span>$ {product.price}</span>
                </td>
                <td className="qty">
                    <div className="qty-btn d-flex">
                        <p>шт</p>
                        <div className="quantity">
                            <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value={product.quantity}/>
                            <span className="qty-plus"><i className="fa fa-plus" aria-hidden="true"></i></span>
                        </div>

                    </div>
                </td>
                <td>
                <button 
                className="btn"
                onClick={()=> props.removeItem(product._id)}
                >Убрать из карзины</button> 
                </td>
            </tr>
        ))
    )


    return (
        <tbody>
            {renderItems()}
        </tbody>
    )
}

export default UserCardBlock
