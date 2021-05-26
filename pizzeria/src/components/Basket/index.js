import React from 'react'
import basketicon from "../../images/icons/basket-icon.svg"

export const Basket = () => {
    return (
        <section id="basket">
            <div class="basket-right">
                <div class="basket-icon">
                    <img src={basketicon} alt="Basket icon" />
                </div>
                <div class="inner-basket">
                    <h4>Your Cart</h4>
                    <div id="bin">
                    </div>
                    <div class="bottom-details">
                        <h4>Subtotal (<span id="subtotal"></span> Items)</h4>
                        <div class="total-price"><span></span></div>
                        <button class="checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
