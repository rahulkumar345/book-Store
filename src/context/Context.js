import React, { createContext, useReducer, useEffect } from "react";
import books from "../data/books.json";
import reducer from "./Reducer";

const initialState = {
  books: books,
  searchString: null,
  searchedBooks: books,
  carts: [],
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async () => {
    const headers = {
      // Define your headers here
      Authorization: "letMeIn",
      "Content-Type": "application/json",
    };

    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    const result = await fetch(
      "https://books-api-iofo.onrender.com/blogs/",
      requestOptions
    );
    const res = await result.json();
    // setBooks(res);
    console.log(books);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  useEffect(() => {
    if (localStorage.getItem("carts") !== null) {
      const fetchedCarts = JSON.parse(localStorage.getItem("carts"));
      fetchCarts(fetchedCarts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);

  //actions
  const fetchCarts = (fetchedCarts) => {
    dispatch({
      type: "FETCH_CART",
      payload: fetchedCarts,
    });
  };
  const getAll = (data) => {
    dispatch({
      type: "GET_BOOK",
      payload: data,
    });
  };
  const addCart = (id) => {
    dispatch({
      type: "ADD_CART",
      payload: id,
    });
  };

  const updateCart = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { id, quantity },
    });
  };

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  const getSearchString = (searchString) => {
    dispatch({
      type: "GET_SEARCHED_STRING",
      payload: searchString,
    });
  };

  const getSearchedBooks = (searchString) => {
    getSearchString(searchString);
    dispatch({
      type: "GET_SEARCHED_BOOKS",
      payload: searchString,
    });
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  return (
    <Context.Provider
      value={{
        books: state.books,
        carts: state.carts,
        searchedBooks: state.searchedBooks,
        searchString: state.searchString,
        addCart,
        updateCart,
        removeCart,
        getSearchString,
        getSearchedBooks,
        clearSearch,
        fetchCarts,
      }}
    >
      {children}
    </Context.Provider>
  );
};
