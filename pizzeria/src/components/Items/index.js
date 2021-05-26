import React from 'react'
import pizza from "../../images/pizza.png"
import itembottomicon from "../../images/icons/item-bottom-icon.svg"
export const Items = () => {
  return (
    <section id="items">
      <div class="items-title">
        <h1>Popular dishes</h1>
      </div>
      <div class="items">
        <div class="container">
          <div class="row">
            <div class="product">
              <div class="item">
                <div class="item-img">
                  <img src={pizza} alt="pizza" />
                </div>
                <div class="item-details">
                  <div class="item-name">
                    <span>Quattro formaggi</span>
                  </div>
                  <div class="item-ingredients">
                    <span>Dough, Mozzarella, Cheddar, Blue, Parmesan</span>
                  </div>
                  <div class="item-price">
                    <span>119 UAH</span>
                  </div>
                  <div class="item-bottom-icon">
                    <img
                      src={itembottomicon}
                      alt=""
                    />
                  </div>
                </div>
                <div class="overlay">
                  <div class="sizes">
                    <h4>Sizes:</h4>

                    <div class="small">
                      <input
                        type="radio"
                        name="size"
                        id="small_size"
                        value="small"
                      />
                      <label for="small_size">small - 20cm</label>
                    </div>
                    <div class="medium">
                      <input
                        type="radio"
                        name="size"
                        id="medium_size"
                        value="medium"
                      />
                      <label for="medium_size">medium - 25cm</label>
                    </div>
                    <div class="big">
                      <input
                        type="radio"
                        name="size"
                        id="big_size"
                        value="big"
                      />
                      <label for="big_size">big - 32cm</label>
                    </div>
                    <div class="text-center">
                      <button
                        id="addtobasket"
                        class="add-to-basket-btn"
                        type="submit"
                      >
                        Add to basket
                        </button>
                    </div>
                  </div>
                </div>
                <div class="item-bottom-rectangle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
