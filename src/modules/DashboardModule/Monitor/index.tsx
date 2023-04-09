import dashboardSvg from "images/dashmonitor.svg";
import styles from "./dashMonitor.module.scss";

const DashboardMonitor = () => {
  return (
    <div className={styles.dashMonitorWrapper}>
      <h1>Dashboard Monitor</h1>
      <div className={styles.imageWrapper}>
        <img src={dashboardSvg} loading="lazy" alt="dash monitor svg" />
      </div>
    </div>
  );
};

export default DashboardMonitor;
