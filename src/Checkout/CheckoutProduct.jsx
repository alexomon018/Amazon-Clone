import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "../StateProvider";
function CheckoutProduct({ id, title, price, rating, image }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
     dispatch({
         type:"REMOVE_FROM_BASKET",
         id:id
     })
  }

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {title}
        </p>
        <small>$</small>
          <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>; 
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
