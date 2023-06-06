import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./context/Context";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import About from "./components/About";
import BookCart from "./components/BookCart";
import BookDetails from "./components/BookDetails";
import CheckoutPage from "./components/checkout";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Books />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/book-cart" element={<BookCart />} />
          <Route path="/book/details/:id" element={<BookDetails />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
