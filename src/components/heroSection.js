import styles from "../styles/heroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CursorContext } from "./cursorContext";
import HeroImage from "../assets/HeroImage.png";
const HeroSection = () => {
  const [cursor, SetCursor] = useContext(CursorContext);
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.heroText}>
          <p className={styles.introText}>Hi , my name is </p>
          <p
            className={styles.name}
            onMouseEnter={() => {
              SetCursor({ active: true });
            }}
            onMouseLeave={() => {
              SetCursor({ active: false });
            }}
          >
            Robin Choudhary
          </p>
          <p className={styles.subHeading}>I build things for the web </p>
          <p className={styles.bio}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <button className={styles.connectionButton}>
            Connect with me
            <FontAwesomeIcon
              className={styles.coffee}
              icon={faMugHot}
              size="xl"
            />
          </button>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.HeroImage}>
            <img src={HeroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
