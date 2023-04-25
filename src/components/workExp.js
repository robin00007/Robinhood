import { useState } from "react";
import styles from "../styles/workExp.module.css";
const WorkExp = () => {
  const [interns, setInterns] = useState({
    upStatement: {
      name: "Upstatement",
      role: "Software Engineer Intern",
      duration: {
        from: "May 2018",
        to: "Aug 2018",
      },
      points: [
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
      ],
    },
    apple: {
      name: "apple",
      role: "Software Engineer Intern",
      duration: {
        from: "May 2018",
        to: "Aug 2018",
      },
      points: [
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
      ],
    },
    Google: {
      name: "google",
      role: "Software Engineer Intern",
      duration: {
        from: "May 2018",
        to: "Aug 2018",
      },
      points: [
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
        "Worked on a project to create a web application for a client to manage their data and create reports.",
      ],
    },
  });
  const companies = Object.keys(interns);
  const [active, setActive] = useState(companies[0]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>Work Experience</div>
        <div className={styles.Card}>
          <div className={styles.nameCard}>
            {companies.map((company) => {
              return (
                <div
                  className={`${styles.companyPill} ${
                    company === active ? styles.active : null
                  }`}
                  onClick={() => {
                    setActive(company);
                  }}
                >
                  {company}
                </div>
              );
            })}
          </div>
          <div className={styles.detailCard}>
            <p className={styles.role}>
              {" "}
              {interns[active].role
                ? interns[active].role
                : "role field missing "}{" "}
              @{" "}
              <p className={styles.name}>
                {interns[active].name
                  ? interns[active].name
                  : "company name missing "}
              </p>
            </p>
            <p className={styles.duration}>
              {interns[active].duration.from
                ? interns[active].duration.from
                : "enter the start duration "}
              -
              {interns[active].duration.to
                ? interns[active].duration.to
                : "enter the end duration"}
            </p>
            <div className={styles.points}>
              {interns[active].points.length > 0
                ? interns[active].points.map((point) => {
                    return <li className={styles.point}>{point}</li>;
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
