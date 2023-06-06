import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="container">
      <h2>Thanks for buying!</h2>
      <p>Your purchase was successful.</p>
      <Link to="/" className="btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutPage;
