import Backdrop from "../UI/Backdrop";
import styles from "./Error.module.css";
import { useDispatch } from "react-redux";

const Error = (props) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch({ type: "SHOW_ERROR", showError: false });
    dispatch({ type: "SHOW_LOADER", showLoader: false });
  };
  return (
    <Backdrop >
      <div className={styles['error-body']}>
        <h1>Oops... Something went wrong!</h1>
        <button onClick={clickHandler}>Close</button>
      </div>
    </Backdrop>
  );
};

export default Error;
