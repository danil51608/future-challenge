import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  books: {},
  showError: false,
  showLoader: false,
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
        showError: action.showError,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.sort,
      };

    case "SHOW_LOADER":
      return {
        ...state,
        showLoader: action.showLoader,
      };
  }
  return state;
};

const store = createStore(appReducer, composeWithDevTools());

export default store;
