import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const CheckoutPage = () => {
  const { emptyCart } = useContext(Context);

  const handleContinueShopping = () => {
    emptyCart();
  };

  return (
    <div className="container">
      <h2>Thanks for buying!</h2>
      <p>Your purchase was successful.</p>
      <Link to="/" className="btn btn-primary" onClick={handleContinueShopping}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutPage;
