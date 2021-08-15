import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portal = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </Fragment>
  );
};

export default Modal;
