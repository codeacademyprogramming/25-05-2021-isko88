import React from 'react';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basketActions';

function Product({ product }) {

    const dispatch = useDispatch();

    const addItemToBasket = (product) => {
        dispatch(addToBasket(product))
    }

    return (
        <div className="col-lg-3 col-sm-6 mb-5">
            <div className="pizza-card my-3">
                <div className="card-image w-100">
                    <img src={product.image} alt="pizza" className="ms-4 w-100" /></div>
                <div className="card-body">
                    <span className="f-600">{product.name}</span>
                    <p className="my-2">{product.topping ? product.topping.join(" ") : "N/A"}</p>
                    <p className="text-center mt-3 f-300 price">{product.price} UHA</p>
                </div>
                <div className="card-add" onClick={() => addItemToBasket(product)}>
                    <div className="wrapper">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
