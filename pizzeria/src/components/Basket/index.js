import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BasketItem from './BasketItem';

 function Basket() {
const [openBasket, setOpenBasket] = useState(false);
const handleClickBasket = React.useCallback(()=>{
    if (openBasket) {
        setOpenBasket(false);
    }else{
        setOpenBasket(true);
    }
    

})
    const { items } = useSelector(state => state.basketReducer);

    return (
        <div className="cart" id="cart">
            <div className="basket-icon">
                <button onClick={handleClickBasket}><i className="fas fa-shopping-bag"></i></button>
            </div>
            
           {openBasket && ( <div className="cart-content" id="cart-content">
                {items.map((item,idx) =>
                    <BasketItem product={item} key={idx} />
                )}
                {items.length < 1 ? <span>Basket is empty</span> : ""}
            </div>)}
        </div>
    )
}

export default Basket
