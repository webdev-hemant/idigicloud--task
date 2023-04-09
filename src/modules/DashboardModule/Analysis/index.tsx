import dashAnalysis from "images/analysis.svg";
import styles from "./dashAnalysis.module.scss";

const DashboardAnalysis = () => {
  return (
    <div className={styles.dashAnalysisWrapper}>
      <h1>Dashboard Analysis</h1>
      <div className={styles.imageWrapper}>
        <img src={dashAnalysis} loading="lazy" alt="analysis svg" />
      </div>
    </div>
  );
};

export default DashboardAnalysis;
