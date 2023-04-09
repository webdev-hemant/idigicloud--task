import React, { useContext } from "react";
import { RootContext } from "ContextApi/RootContext";
import { SidebarContext } from "ContextApi/SidebarNavContext";
import homeSvg from "images/home.svg";
import styles from "./home.module.scss";

const HomeModule = () => {
  return (
    <div className={styles.homePageWrapper}>
      <h1>Home page</h1>
      <div className={styles.imageWrapper}>
        <img src={homeSvg} loading="lazy" alt="home image svg" />
      </div>
    </div>
  );
};

export default HomeModule;
