import { useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import routeData from "constants/routesData";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./sidebar.module.scss";
import OutsideClickHandler from "components/OutsideClickHandler";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);
  const routesMemo = useMemo(() => routeData, []);
  const handleNavClick = (item: any) => {};

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
              {routesMemo
                .filter((item: any) => item.path !== "*")
                .map((item: any) => (
                  <li
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={styles.titleName}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </OutsideClickHandler>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
