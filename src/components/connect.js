import styles from "../styles/connect.module.css";
import { FaRegHandshake } from "react-icons/fa";
const Connect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.topic}>Send me a message !</p>
        <p className={styles.subheading}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
        <div className={styles.form}>
          <div className={styles.row}>
            <div >
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="">Email Address </label>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>

          <div className={styles.column}>
            <label htmlFor="">Your Message</label>
            <input type="text" placeholder="Enter your name" />
          </div>
        </div>
        <button className={styles.connect }>
          Connect <FaRegHandshake color="#63fbd7" style={{transform:'scale(1.2)',marginLeft:'20px'}}/>
        </button>
      </div>
    </div>
  );
};
export default Connect;
