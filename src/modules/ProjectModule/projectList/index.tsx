import projectList from "images/projectList.svg";
import styles from "./projectList.module.scss";

const ProjectList = () => {
  return (
    <div className={styles.projectListWrapper}>
      <h1>All Project</h1>
      <div className={styles.imageWrapper}>
        <img src={projectList} loading="lazy" alt="project list svg" />
      </div>
    </div>
  );
};

export default ProjectList;
