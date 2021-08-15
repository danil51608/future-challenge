import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  books: {},
  showError: false,
  sort: "relevance",
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.books,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        showError: true,
      };
    case "HIDE_ERROR":
      return {
        ...state,
        showError: false,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.sort
      };
  }
  return state;
};

const store = createStore(appReducer, composeWithDevTools());

export default store;
