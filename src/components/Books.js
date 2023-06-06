import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Book from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import image1 from "../assets/360_indian_bookstore_0122.jpg";
import image2 from "../assets/book-library-information-wallpaper-preview.jpg";

const Books = () => {
  const { books, clearSearch, searchedBooks, searchString } =
    useContext(Context);

  useEffect(() => {
    const carousel = document.querySelector("#imageCarousel");
    const carouselInstance = new window.bootstrap.Carousel(carousel);

    return () => {
      carouselInstance.dispose();
    };
  }, []);

  return (
    <div className="container">
      <div
        id="imageCarousel"
        className="carousel slide mb-3"
        data-bs-ride="carousel"
        style={{ maxHeight: "50vh", overflow: "hidden" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              alt="Image 1"
              className="d-block w-100 h-auto"
              style={{ maxHeight: "100%" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              alt="Image 2"
              className="d-block w-100 h-auto"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h1
        style={{ marginLeft: "20px", color: "#000" }}
        className="display-4 text-center mb-3"
      ></h1>

      <div className="row">
        {searchedBooks.map((book) => {
          const { id } = book;
          return <Book key={id} bookDetails={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
