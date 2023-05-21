import styles from "../styles/projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import "swiper/css/controller";
import { useSwiper } from "swiper/react";
import { useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.swiper}>
          {projects.map((project) => {
            return (
            <div className={styles.swiperContainer}>
            <div className={styles.iframe}>
              <iframe src="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" frameborder="0"></iframe>
            </div>
            <div className={styles.swiperContent}>
              <p className={styles.heading}>Heading</p>
              <div>
                <div className={styles.languages}>
                  <p className={styles.piles}>HTML </p>
                  <p className={styles.piles}>CSS</p>
                  <p className={styles.piles}>Javascript</p>
                  <p className={styles.piles}>Reactjs</p>
                </div>
                <p className={styles.link}>https://robinchouhary.me</p>
              </div>
               
              <p className={styles.discription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                eligendi ex praesentium optio quos, quasi dolorum ducimus minus
                corrupti vel placeat architecto, magni impedit deleniti,
                aspernatur eos enim eaque dolore voluptatum quia quisquam. Porro
                excepturi tempore ad facilis exercitationem incidunt, iure, quod
                animi, vero aliquid quae reiciendis! Doloremque, voluptates rem?
              </p>
            </div>
          </div> )
          })}
          
        </div>
      </div>
    </div>
  );
};
export default Projects;
