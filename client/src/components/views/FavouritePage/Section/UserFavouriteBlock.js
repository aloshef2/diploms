import React from 'react'

function UserFavouriteBlock(props) {

console.log(props.product)

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td class="cart_product_img">
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td>
                <td >
                    <span>{product.title}</span>
                </td>
                <td >
                    <span>$ {product.price}</span>
                </td>
                <td>
                <button 
                className="btn"
                onClick={()=> props.removeItem(product._id)}
                >Убрать из избраного</button> 
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserFavouriteBlock
