import { useContext, useState } from "react";
import styles from "../styles/header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CursorContext } from "./cursorContext";
import { IoMdCloudDownload } from "react-icons/io";
import data from "../data/template.json";


const Header = () => {
  const names = ["Robinhood", "Javascript", "Reactjs", "Developer", "HTML/CSS"];

  const [tags, setTags] = useState("Robinhood");
  setInterval(() => {
    const index = Math.floor(Math.random() * names.length);
    setTags(names[index]);
  }, 3000);
  const [cursor, setCursor] = useContext(CursorContext);
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.roller}>{"Robinhood"}</div>
        <div className={styles.menuButton}>
          <a
            href={data.profileImageUrl}
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
            <IoMdCloudDownload
              style={{ transform: "scale(1.5)", marginLeft: "5px" }}
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
