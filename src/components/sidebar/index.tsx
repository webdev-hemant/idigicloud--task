import { useMemo, useState, SetStateAction } from "react";
import { Link, Outlet } from "react-router-dom";
import routeData from "constants/routesData";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./sidebar.module.scss";
// -------------
// import logo from "@/images/og-logo.png";

// const Sidebar = () => {
//   const routesMemo = useMemo(() => routeData, []);
//   return (
//     <div>
//       <nav>
//         <ul>
//           {routesMemo
//             .filter((item: any) => item.path !== "*")
//             .map((item: any, index: number) => {
//               return (
//                 <li key={index}>
//                   <Link to={item.path}>{item?.name}</Link>
//                 </li>
//               );
//             })}
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// };

// export default Sidebar;

interface IProps {
  handleNavClick: (_: string) => void;
  setShowNav: React.Dispatch<SetStateAction<boolean>>;
  showNav: boolean;
}

const Sidebar = () => {
  // const { handleNavClick = (_) => {}, showNav = true, setShowNav } = props;
  const [showNav, setShowNav] = useState(true);

  const handleNavClick = (item: any) => {};

  return (
    <nav className={styles.navWrapper}>
      <div className={`${styles.mobileNav} ${showNav || styles.navOpen}`}>
        <div className={styles.imgWrapper}>
          {/* <Image
            className={styles.img}
            src={logo}
            alt=""
            width={50}
            height={50}
          /> */}
        </div>
        {showNav ? (
          <GiHamburgerMenu
            onClick={() => {
              document.body.style.overflow = "hidden";
              setShowNav(false);
            }}
            style={{ width: "40px", height: "40px" }}
            className={styles.hamBurger}
          />
        ) : (
          <RxCross2
            onClick={() => {
              document.body.style.overflow = "unset";
              setShowNav(true);
            }}
            style={{ width: "50px", height: "50px", stroke: "blue" }}
            className={styles.crossIcon}
          />
        )}
      </div>
      <div
        className={`${styles.hiddenNavbarContainer} ${
          showNav && styles.width_0
        }`}
      >
        <ul className={styles.navListContainer}>
          {routeData
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
    </nav>
  );
};

export default Sidebar;
