import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./breadCrumbs.module.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <div className={styles.breadCrumbsWrapper}>
      {pathnames.length > 0 ? <Link to="/">Home</Link> : null}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={routeTo}>
            <span> / </span>
            {isLast ? (
              <span className={styles.lastRoute}>{name}</span>
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
