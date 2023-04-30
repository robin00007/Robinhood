import styles from "../styles/projects.module.css";
import PinnedRepo from "../api/pinnedRepo";
import AllRepo from "../api/allRepos";
import { useState } from "react";
import { useEffect } from "react";
const Projects = () => {
  const [pin, setPin] = useState([]);

  const handlePinned = async () => {
    const result = await PinnedRepo();
    console.log(result);
  };
  useEffect(() => {
    handlePinned();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {pin.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>
    </div>
  );
};
export default Projects;
