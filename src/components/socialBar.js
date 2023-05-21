import styles from "../styles/socialBar.module.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import data from "../data/template.json";
import { useState } from "react";
const SocialBar = () => {
  const [tempData, setTempData] = useState({ ...data });
  return (
    <div className="mainContainer">
      <div className={styles.container}>
        <a href={data.socialUrl.github ? data.socialUrl.github : null } className={styles.socialIcon}>
          {" "}
          <BsGithub color="red" />
        </a>
        <a href={data.socialUrl.linkedin ? data.socialUrl.linkedin : null } className={styles.socialIcon} >
          {" "}
          <BsLinkedin />
        </a>
        <a href={data.socialUrl.instagram ? data.socialUrl.instagram : null } className={styles.socialIcon} >
          {" "}
          <RiInstagramFill />
        </a>
        <a href={data.socialUrl.twitter ? data.socialUrl.twitter : null } className={styles.socialIcon} >
          {" "}
          <AiFillTwitterCircle />
        </a>
        <a href="mailto:robinhood19062002@gmail.com" className={styles.socialIcon}>
          {" "}
          <IoIosMail />
        </a>
        <div className={styles.verticalStick}></div>
      </div>
      <div className={styles.container2}>
        <a
          href="mailto:robinhood19062002@gmail.com"
          className={styles.verticalText}
        >
          {tempData.email ? tempData.email : "Enter your email"}
        </a>
        <div className={styles.verticalStick}></div>
      </div>
    </div>
  );
};
export default SocialBar;
