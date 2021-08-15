import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  books: {},
  showError: false,
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
  }
  return state;
};

const store = createStore(appReducer, composeWithDevTools());

export default store;
