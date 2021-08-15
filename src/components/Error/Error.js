import Modal from "./Modal";

const Error = props => {
    const closeHandler = () => {
        props.setShowError(false)
    }
  return (
    <Modal>
      <h1>Oops... Something went wrong!</h1>
      <button onClick={closeHandler}>Close</button>
    </Modal>
  );
};

export default Error;
