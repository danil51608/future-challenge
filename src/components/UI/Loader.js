import Backdrop from './Backdrop'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <Backdrop>
        <div className={styles['lds-roller']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </Backdrop>
  );
};

export default Loader
