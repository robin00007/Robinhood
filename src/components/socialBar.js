import styles from "../styles/socialBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlternateGitHub } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAlternateGitHub } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
const SocialBar = () => {
  return (
    <div className="mainContainer">
      <div className={styles.container}>
        {/* <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faAlternateGitHub} />
      <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faInstagram} bounce /> */}

        <FontAwesomeIcon
          className={styles.FontAwesomeIcon}
          icon={faCloudArrowDown}
          size="lg"
          style={{
            color: "#ffffff",
            // transform: "scale(1.5)",
            backgroundColor: "transparent",
          }}
        />
        <FontAwesomeIcon
          className={styles.FontAwesomeIcon}
          icon={faCloudArrowDown}
          size="lg"
          style={{
            color: "#ffffff",
            // transform: "scale(1.5)",
            backgroundColor: "transparent",
          }}
        />
        <FontAwesomeIcon
          className={styles.FontAwesomeIcon}
          icon={faCloudArrowDown}
          size="lg"
          style={{
            color: "#ffffff",
            // transform: "scale(1.5)",
            backgroundColor: "transparent",
          }}
        />
        <FontAwesomeIcon
          className={styles.FontAwesomeIcon}
          icon={faCloudArrowDown}
          size="lg"
          style={{
            color: "#ffffff",
            // transform: "scale(1.5)",
            backgroundColor: "transparent",
          }}
        />
        <FontAwesomeIcon
          className={styles.FontAwesomeIcon}
          icon={faCloudArrowDown}
          size="lg"
          style={{
            color: "#ffffff",
            // transform: "scale(1.5)",
            backgroundColor: "transparent",
          }}
        />
        <div className={styles.verticalStick}></div>
      </div>
      <div className={styles.container2}>
        <a
          href="mailto:robinhood19062002@gmail.com"
          className={styles.verticalText}
        >
          robinhood19062002@gmail.com
        </a>
        <div className={styles.verticalStick}></div>
      </div>
    </div>
  );
};
export default SocialBar;
