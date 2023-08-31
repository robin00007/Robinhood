import { useEffect, useState } from "react";
import styles from "../styles/workExp.module.css";
import data from "../data/template.json";
const WorkExp = () => {
  const [interns, setInterns] = useState({});
  let companies=Object.keys(data.experience);
  const [active, setActive] = useState({});
  useEffect(() => {
    setInterns({ ...data.experience });
    setActive(companies[0]);
    
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Work Experience</div>
        <div className={styles.Card}>
          <div className={styles.nameCard}>
            {companies?.length > 0
              ? companies.map((company,index) => {
                  return (
                    <div
                      className={`${styles.companyPill} ${
                        company === active ? styles.active : null
                      }`}
                      key={index}
                      onClick={() => {
                        setActive(company);
                      }}
                    >
                      {company}
                    </div>
                  );
                })
              : null}
          </div>
          <div className={styles.detailCard}>
            <div className={styles.role}>
              {" "}
              {interns[active]?.role
                ? interns[active]?.role
                : "role field missing "}{" "}
              <p className={styles.name}>
                {" "}
                @{" "}
                {interns[active]?.name
                  ? interns[active]?.name
                  : "company name missing "}
              </p>
            </div>
            <p className={styles.duration}>
              {interns[active]?.duration.from
                ? interns[active]?.duration.from
                : "enter the start duration "}
              -
              {interns[active]?.duration.to
                ? interns[active]?.duration.to
                : "enter the end duration"}
            </p>
            <div className={styles.points}>
              {interns[active]?.points.length > 0
                ? interns[active]?.points.map((point, index) => {
                    return (
                      <li className={styles.point} key={index}>
                        {point}
                      </li>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExp;
