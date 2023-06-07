import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const BookCartCheckOut = () => {
  const { books, carts } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingCost = 5;
  console.log(carts);
  const getSubtotal = (books, carts) => {
    let subtotal = 0;
    carts.forEach((cart) => {
      books.forEach((book) => {
        if (book.id === cart.id) {
          subtotal = subtotal + book.price * cart.quantity;
        }
      });
    });

    return subtotal.toFixed(2);
  };

  let subtotal = getSubtotal(books, carts);
  let tempTotal = (parseFloat(subtotal) + shippingCost).toFixed(2);
  if (subtotal == 0) {
    tempTotal = 0;
  }

  useEffect(() => {
    setTotalPrice(tempTotal);
  }, [tempTotal]);

  return (
    <div className="container">
      <div className="checkout-area w-75 mx-auto my-5">
        <h1 className="heading text-center">Total</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            {subtotal > 0 && (
              <tr>
                <td>Shipping Cost</td>
                <td>$0{shippingCost}</td>
              </tr>
            )}
            <tr className="text-primary h4">
              <td>Total</td>
              <td>${totalPrice}</td>
            </tr>
            <tr>
              <td>
                <Link className="btn btn-outline-primary" to="/">
                  Back To Shopping
                </Link>
              </td>
              <td>
                <Link className="btn btn-outline-info" to="/checkout">
                  Checkout
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCartCheckOut;
