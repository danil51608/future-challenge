import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initState = {
  booksObj: {},
  showError: false,
  showLoader: false,
  sort: "relevance",
  searchText: "",
  category: "",
  page: 0,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: action.category,
      };

    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.text,
      };

    case "LOAD_MORE_BOOKS":
      return {
        ...state,
        booksObj: {
          ...state.booksObj,
          items: [...state.booksObj.items, ...action.books],
        },
      };

    case "SET_BOOKS_SEARCH":
      return {
        ...state,
        books: action.books,
      };

    case "SET_BOOKS_OBJ":
      return {
        ...state,
        booksObj: action.booksObj,
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
