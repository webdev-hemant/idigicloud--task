import dashboardSvg from "images/dashboard.svg";
import styles from "./dashboard.module.scss";

const DashboardModule = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <h1>Dashboard</h1>
      <div className={styles.imageWrapper}>
        <img src={dashboardSvg} loading="lazy" alt="dashboard svg" />
      </div>
    </div>
  );
};

export default DashboardModule;
