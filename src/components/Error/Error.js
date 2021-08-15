import Modal from "./Modal";
import {useDispatch} from 'react-redux'

const Error = props => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch({type: 'HIDE_ERROR'})
  }
  return (
    <Modal>
      <h1>Oops... Something went wrong!</h1>
      <button onClick={clickHandler}>Close</button>
    </Modal>
  );
};

export default Error;
