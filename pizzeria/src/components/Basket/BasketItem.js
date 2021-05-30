import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../../redux/basketActions';

function BasketItem({ product }) {

    const dispatch = useDispatch();

    const removeItem = product => {
        dispatch(removeFromBasket(product));
    }

    return (
        <div className="cart-item d-flex my-3">
            <div className="image">
                <img src={product.image} className="img-fluid" alt={`${product.name} in basket`} />
            </div>
            <div className="d-flex align-items-center">
                <strong className="me-3">x{product.count}</strong>
                <div className="text" style={{ width: "150px" }}>
                    <h6 className="mb-0">{product.name}</h6>
                </div>
                <strong>{product.price * product.count} <sup>UHA</sup></strong>
                <button className="btn btn-primary-circle btn-remove-card-item"
                    onClick={() => removeItem(product)}><i className="fas fa-times"> </i></button>
            </div>
        </div>
    )
}

export default BasketItem
