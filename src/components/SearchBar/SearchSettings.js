import {useDispatch} from "react-redux"

const SearchSettings = (props) => {
    const dispatch = useDispatch()
    const {setCategory, setSort} = props;
    const categoryChangeHandler = (e) => {
        setCategory(e.target.value)
    }
    const sortChangeHandler = (e) => {
        dispatch({type: 'SET_SORT', sort: e.target.value})
    }
  return (
    <div>
      <label htmlFor="categories">Categories</label>
      <select onChange={categoryChangeHandler} id="categories">
        <option value="all">All</option>
        <option value="art">Art</option>
        <option value="biography">Biography</option>
        <option value="computers">Computers</option>
        <option value="history">History</option>
        <option value="medical">Medical</option>
        <option value="poetry">Poetry</option>
      </select>
      <label htmlFor="sort">Sort By</label>
      <select onChange={sortChangeHandler} id="sort">
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default SearchSettings;
