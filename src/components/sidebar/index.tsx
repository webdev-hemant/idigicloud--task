import { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { IJsonData } from "constants/routesData";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from "components/OutsideClickHandler";
import CollapsableComponent from "components/CollapsableComponent";
import Breadcrumbs from "components/BreadCrumbs";
import styles from "./sidebar.module.scss";
import { SidebarContext } from "ContextApi/SidebarNavContext";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();
  const { sidebarState } = useContext(SidebarContext);

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={`${styles.mobileNav} `}>
          <div className={styles.imgWrapper}></div>
          {showNav ? (
            <GiHamburgerMenu
              onClick={() => {
                setShowNav(false);
              }}
              style={{ width: "40px", height: "40px" }}
              className={styles.hamBurger}
            />
          ) : null}
        </div>
        <OutsideClickHandler onOutsideClick={() => setShowNav(true)}>
          <div
            className={`${styles.hiddenNavbarContainer} ${
              showNav && styles.width_0
            }`}
          >
            <ul className={styles.navListContainer}>
              <RxCross2
                onClick={() => {
                  setShowNav(true);
                }}
                style={{ width: "40px", height: "40px", stroke: "white" }}
                className={styles.crossIcon}
              />
              {sidebarState
                .filter((item: IJsonData) => item.path !== "*")
                .map((item: IJsonData, index: number) => (
                  <li key={index} className={styles.titleName}>
                    <CollapsableComponent routeDetail={item} />
                  </li>
                ))}
            </ul>
          </div>
        </OutsideClickHandler>
      </nav>
      <main>
        {location.pathname !== "/" ? <Breadcrumbs /> : null}
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
