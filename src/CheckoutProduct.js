import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

<<<<<<< HEAD
<<<<<<< HEAD
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
=======
function CheckoutProduct({ id, image, title, price, rating }) {
>>>>>>> 846a96c (First commit of Amazon-Clone)
=======
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
>>>>>>> 49122ef (Integrated Stripe and Cloud functions)
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="Somethings wrong"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>
            $<strong>{price}</strong>
          </small>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
=======
        <button onClick={removeFromBasket}>Remove from Basket</button>
>>>>>>> 846a96c (First commit of Amazon-Clone)
=======
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
>>>>>>> 49122ef (Integrated Stripe and Cloud functions)
      </div>
    </div>
  );
}

export default CheckoutProduct;
