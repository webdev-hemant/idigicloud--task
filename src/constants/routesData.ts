// import * as ReactIcons from "react-icons/all";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiFillSetting,
} from "react-icons/ai";
import {
  MdMonitorHeart,
  MdChecklistRtl,
  MdPlaylistAddCircle,
} from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { GoDashboard, GoProject } from "react-icons/go";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";

export interface IJsonData {
  path: string;
  component: string;
  name?: string;
  locale?: string;
  hideInMenu?: boolean;
  exact?: boolean;
  redirect?: string;
  icon?: any;
  accessTO?: any;
  key?: string;
  parentKey?: string;
  routes?: IJsonData[];
}

const jsonData: IJsonData[] = [
  {
    name: "Home Page",
    locale: "Home.Page",
    path: "/",
    component: "modules/HomeModule",
    icon: AiOutlineHome,
    hideInMenu: true,
    exact: true,
  },
  {
    name: "Login",
    locale: "user.login",
    path: "/user/login",
    component: "modules/UserModule/Login",
    icon: FiLogIn,
    hideInMenu: true,
  },
  {
    path: "/dashboard",
    locale: "dashboard",
    name: "Dashboard",
    icon: AiOutlineDashboard,
    exact: true, // This route will only work for /dashboard . For
    //dashboard/analysis or other this component will not be rendered
    component: "modules/DashboardModule",
    routes: [
      {
        path: "/dashboard/analysis",
        locale: "dashboard.analysis",
        name: "analysis",
        component: "modules/DashboardModule/Analysis",
        exact: true,
        icon: SiSimpleanalytics,
        accessTO: ["admin"], // Allow only admins to view this menu
        //and access this page
      },
      {
        path: "/dashboard/monitor",
        locale: "dashboard.monitor",
        component: "modules/DashboardModule/Monitor",
        name: "monitor",
        icon: MdMonitorHeart,
        exact: true,
      },
      {
        path: "/dashboard/workplace",
        locale: "dashboard.workplace",
        component: "modules/DashboardModule/Workplace",
        name: "workplace",
        icon: BsPersonWorkspace,
        exact: true,
      },
    ],
  },
  {
    path: "/projects",
    locale: "projects",
    name: "Projects",
    icon: GoProject,
    component: "modules/ProjectModule",
    redirect: "/projects/list", //Redirect /projects to
    ///projects/list
    routes: [
      {
        path: "/projects/list",
        locale: "projects.list",
        component: "modules/ProjectModule/projectList",
        name: "Projects",
        icon: MdChecklistRtl,
        exact: true,
      },
      {
        path: "/projects/:id",
        locale: "projects.details",
        component: "modules/ProjectModule/projectId",
        name: "Project Details",
        hideInMenu: true,
        icon: MdPlaylistAddCircle,
        key: "projects",
        exact: true,
      },
      {
        path: "/projects/:id/settings",
        component: "modules/ProjectModule/projectSetting",
        locale: "projects.settings",
        icon: AiFillSetting,
        name: "Settings",
        parentKey: "details",
        exact: true,
      },
    ],
  },
  {
    path: "*",
    component: "components/NoMatch.tsx",
  },
];

Object.freeze(jsonData);

const flattenArray = (arr: IJsonData[]) => {
  let result: IJsonData[] = [];

  for (let item of arr) {
    if (Array.isArray(item.routes)) {
      const { routes, ...rest } = item;
      result = [...result, rest, ...flattenArray(routes)];
    } else {
      result = [...result, item];
    }
  }

  return result;
  // this is recursive funtion for getting all object routes into one array
};

const routeData = flattenArray(jsonData);

export default routeData;
export { jsonData };
