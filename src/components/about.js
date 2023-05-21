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
        My name is Robin and I am a persuing my under-graduation from the Army Institute of Technology. Currently, I had working as a Front End Lead at Google Developer Student Club AIT Pune. During my tenure, I have gained a deep understanding of front-end development technologies and have worked on multiple projects related to web development, including developing and maintaining websites, web applications .

        </p>
        <p className={styles.bio}>
        I am proficient in React JS, HTML5, CSS3, JavaScript, and have hands-on experience in using Nextjs . I am also familiar with modern development tools such as Git, NPM, Webpack, and Babel. I have strong problem-solving skills, and I am confident that I can contribute positively to your company's growth.
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
