import styles from "../styles/heroSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { CursorContext } from "./cursorContext";
import HeroImage from "../assets/HeroImage.png";
import data from "../data/template.json";
const HeroSection = () => {
  const [cursor, SetCursor] = useContext(CursorContext);
  const [tempData, setTempData] = useState({ ...data });
  return (
    <div className={styles.container}>
      <div className={`${styles.subContainer} ${styles.column}`}>
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
            {tempData.name ? tempData.name : "Povide name"}
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
            <img
              src={
                tempData.profileImageUrl ? tempData.profileImageUrl : HeroImage
              }
              alt="heroImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
