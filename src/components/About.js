import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="display-4 mb-4">About Book Store</h1>
      <h3>
        Book Store is an online platform designed for book lovers, offering a
        wide selection of books across various genres. Our goal is to provide an
        enjoyable and convenient shopping experience for book enthusiasts of all
        ages.
      </h3>

      <h3>Key Features:</h3>
      <ul className="feature-list">
        <li>
          <strong>Book Search:</strong> Easily search for your favorite books by
          title, author, or keywords. Our advanced search functionality ensures
          you can find the books you're looking for quickly and efficiently.
        </li>
        <li>
          <strong>Book Filtering:</strong> Refine your search results using
          filters such as genre, author, price range, and more. This allows you
          to discover new books and narrow down your choices based on your
          preferences.
        </li>
        <li>
          <strong>Add to Cart:</strong> Build your own personal book collection
          by adding books to your cart. Simply click the "Add to Cart" button on
          the book details page, and the book will be saved for your future
          purchase.
        </li>
        <li>
          <strong>Remove from Cart:</strong> Changed your mind about a book? No
          problem! You can easily remove books from your cart with a single
          click, ensuring that your cart contains only the books you truly want
          to purchase.
        </li>
        <li>
          <strong>Order Placement:</strong> Once you've finalized your book
          selection, proceed to the checkout process to place your order. Our
          secure payment gateway ensures that your personal and financial
          information is protected. After successful payment, your books will be
          on their way to your doorstep!
        </li>
      </ul>

      <h3>
        At Book Store, we strive to provide an immersive and user-friendly
        platform for book enthusiasts to explore, discover, and indulge in their
        passion for reading. We are committed to delivering a seamless shopping
        experience and ensuring customer satisfaction every step of the way.
      </h3>
    </div>
  );
};

export default About;
