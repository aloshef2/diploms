import NavBar from "../NavBar/NavBar";
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    getFavouriteItems,
    removeFavouriteItem
} from '../../../_actions/user_actions';
import UserFavouriteBlock from './Section/UserFavouriteBlock';
import { Result, Empty } from 'antd';
import Footer from "../Footer/Footer";

function FavouritePage(props) {

    const [ShowSuccess, setShowSuccess] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {

        let favouriteItems = [];
        if (props.user.userData && props.user.userData.favourite) {
            if (props.user.userData.favourite.length > 0) {
                props.user.userData.favourite.forEach(item => {
                    favouriteItems.push(item.id)
                });
                dispatch(getFavouriteItems(favouriteItems, props.user.userData.favourite))
                    .then(rs => {
                        setShowSuccess(true)
                    })
            }
        }

    }, [props.user.userData])

   
    const removeFromFavourite = (productId) => {

        dispatch(removeFavouriteItem(productId))
    }

    return (
        <div>
<div className="main-content-wrapper d-flex clearfix">

<NavBar />

<div className="cart-table-area section-padding-100">
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="cart-title mt-50">
                    <h2>Избранное</h2>
                </div>

                <div className="cart-table clearfix">
                    <table className="table table-responsive" >
                        <thead>
                            <tr >
                                <th></th>
                                <th>Название</th>
                                <th>Цена</th>
                            </tr>
                        </thead>
                        <tbody>
                        <UserFavouriteBlock
                        products={props.user.favouriteDetail}
                        removeItem={removeFromFavourite}
                            />
                        {ShowSuccess ?
                        <div></div>
                        :    
                        <div className="pt-5">
                            <Empty description={false} />
                        </div>
                        
                            }
                        
                            
                        </tbody>
                    </table>
                </div>
            </div>
            {ShowSuccess ?
                <div></div> :
                <div style={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <br />
                    <p>Вы не чего не отслеживаете</p>

                </div>
        }
        </div>
    </div>
</div>
</div>
<Footer />
        </div>
        
    )
}

export default FavouritePage
