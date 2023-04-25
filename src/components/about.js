import styles from "../styles/about.module.css";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.heading}>About me</p>
        <p className={styles.bio}>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className={styles.bio}>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency,a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <div className={styles.technology}>
          <FaReact
            className={styles.techIcons}
            size={"3rem"}
            color={"#ff0000"}
          />
          <TbBrandNextjs className={styles.techIcons} size={"3rem"} />
          <AiFillHtml5 className={styles.techIcons} size={"3rem"} />
          <FaCss3Alt className={styles.techIcons} size={"3rem"} />
          <SiTailwindcss className={styles.techIcons} size={"3rem"} />
          <SiJavascript className={styles.techIcons} size={"3rem"} />
        </div>
      </div>
    </div>
  );
};
export default About;
