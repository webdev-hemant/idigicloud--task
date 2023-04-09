import projectDetailsSvg from "images/projectDetail.svg";
import styles from "./projectDetails.module.scss";

const ProjectId = () => {
  return (
    <div className={styles.ProjectIdWrapper}>
      <h1>Project Id details</h1>
      <div className={styles.imageWrapper}>
        <img src={projectDetailsSvg} loading="lazy" alt="project list svg" />
      </div>
    </div>
  );
};

export default ProjectId;
