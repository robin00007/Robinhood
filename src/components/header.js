import { useContext, useState } from "react";
import styles from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CursorContext } from "./cursorContext";
const Header = () => {
  const names = ["Robinhood", "Javascript", "Reactjs", "Developer", "HTML/CSS"];
  const [tags, setTags] = useState("Robinhood");
  setInterval(() => {
    const index = Math.floor(Math.random() * names.length);
    setTags(names[index]);
  }, 3000);
  const [cursor, setCursor] = useContext(CursorContext);
  const [sideBar, setSideBar] = useState(false);
  console.log("robin", cursor);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.roller}>{"Robinhood"}</div>
        <div className={styles.menuButton}>
          <a
            href="https://drive.google.com/file/u/2/d/1AtoGsPUhdzopmL4ib-NPJL2tqoiIW9bw/view?usp=share_link"
            // target={"_blank"}
            className={styles.download}
            onClick={() => {}}
            onMouseOver={() => {
              setCursor({ active: true });
            }}
            onMouseLeave={() => {
              setCursor({ active: false });
            }}
            download="Robinhood.pdf"
          >
            Download{" "}
            <FontAwesomeIcon
              icon={faCloudArrowDown}
              size="lg"
              style={{
                color: "#ffffff",
                // transform: "scale(1.5)",
                backgroundColor: "transparent",
              }}
            />
          </a>

          {/* <span>Menu</span> */}

          <div
            className={styles.menuBar}
            onClick={() => {
              setSideBar(!sideBar);
            }}
          >
            <span
              className={`${styles.top} ${sideBar ? styles.clockwise : null}`}
            ></span>
            <span
              className={`${styles.middle} ${sideBar ? styles.hide : null}`}
            ></span>
            <span
              className={`${styles.bottom} ${
                sideBar ? styles.antiClockwise : null
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div
        className={`${styles.sideBarScreen} ${
          sideBar ? styles.sideBarActive : null
        }`}
      ></div>
    </div>
  );
};
export default Header;
