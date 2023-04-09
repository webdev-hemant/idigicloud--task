import projectSvg from "images/project.svg";
import styles from "./project.module.scss";

const ProjectModule = () => {
  return (
    <div className={styles.projectWrapper}>
      <h1>Project page</h1>
      <div className={styles.imageWrapper}>
        <img src={projectSvg} loading="lazy" alt="project svg" />
      </div>
    </div>
  );
};

export default ProjectModule;
