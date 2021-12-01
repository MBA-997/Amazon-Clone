import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import checkoutad_banner from "./pictures/checkout_banner.jpg";

function Checkout() {
  useEffect(() => {
    document.title = "Amazon.com Shopping Cart";
  }, []);

  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutad_banner} alt="" />

        <div>
          <h3 className="checkout__title">
            {user?.email.match(".+@")} | <span>Your Amazon Cart</span>
          </h3>

          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
