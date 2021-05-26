import React from 'react'
import topbg from "../../images/topbg.jpg"
import dailyicon from "../../images/icons/daily-icon.svg"
import phoneicon from "../../images/icons/phone-icon.png"
import logo from "../../images/logo.png"

export const TopSection = () => {
  return (
    <section id="top-section" style={{ "background": `url(${topbg}) no-repeat` }}>
      <header>
        <nav>
          <div class="row space-between">
            <div class="list d-flex">
              <ul class="row align-center">
                <li><a href="/">Payment</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contacts</a></li>
              </ul>
            </div>

            <div class="logo">
              <img src={logo} alt="logo" />
            </div>
            <div class="contact-us d-flex">
              <div class="row">
                <div class="daily d-flex align-center">
                  <span
                  ><img
                      src={dailyicon}
                      alt="Daily icon"
                    />
                      Daily 11am - 9pm
                    </span>
                </div>
                <div class="phone-num d-flex align-center">
                  <img
                    src={phoneicon}
                    width="33px"
                    height="33px"
                    alt="Phone icon"
                  />
                  <span> 0 800 33 08 98 </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="top-title text-center">
        <h1>Food delivery in Kovel</h1>
        <p>
          If you decide to relax or have unexpected guests, call us. We make
          sure that your vacation is comfortable, enjoyable and delicious
          </p>
      </div>
    </section>
  )
}
