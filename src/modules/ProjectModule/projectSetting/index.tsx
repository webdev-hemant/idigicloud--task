import projectSetting from "images/projectSetting.svg";
import styles from "./projectSetting.module.scss";

const ProjectSetting = () => {
  return (
    <div className={styles.ProjectSettingWrapper}>
      <h1>Project Setting</h1>
      <div className={styles.imageWrapper}>
        <img src={projectSetting} loading="lazy" alt="project setting svg" />
      </div>
    </div>
  );
};

export default ProjectSetting;
