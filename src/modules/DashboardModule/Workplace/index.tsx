import dashboardSvg from "images/workspace.svg";
import styles from "./dashWorkspace.module.scss";

const DashboardWorkplace = () => {
  return (
    <div className={styles.dashWorkspaceWrapper}>
      <h1>Dashboard Workspace</h1>
      <div className={styles.imageWrapper}>
        <img src={dashboardSvg} loading="lazy" alt="dash workspace svg" />
      </div>
    </div>
  );
};

export default DashboardWorkplace;
