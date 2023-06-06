import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const BookCartItem = ({ cart }) => {
  const { books, updateCart, removeCart } = useContext(Context);
  const { id, quantity } = cart;

  const [newQuantity, setNewQuantity] = useState(quantity);

  const book = books.filter((book) => book.id === id);
  const { title, coverImageSrc, price, authorName, authorId } = book[0];

  const handleCartRemove = () => {
    removeCart(id);
  };

  return (
    <div className="book-item mt-4">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 inline-block">
          <div className="product-cover w-50 m-auto">
            <img className="img-fluid" src={coverImageSrc} alt="" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <h4>
            <Link to={"/book/details/" + id}>{title}</Link>
          </h4>
          <h6>
            By <Link to={"/author/" + authorId}>{authorName}</Link>
          </h6>
          <h5>Price: ${price}</h5>
          <h5>Total Price: ${(price * newQuantity).toFixed(2)}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 p-2">
          <input
            className="input-group w-25 text-center m-auto border border-info  rounded-lg"
            type="text"
            disabled
            value={newQuantity}
          />
          <button
            style={{ margin: "10px" }}
            onClick={() => setNewQuantity(newQuantity + 1)}
          >
            +
          </button>
          {newQuantity > 0 && (
            <button
              style={{ margin: "10px" }}
              onClick={() => setNewQuantity(newQuantity - 1)}
            >
              -
            </button>
          )}
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
          <button onClick={handleCartRemove} className="btn btn-outline-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCartItem;
