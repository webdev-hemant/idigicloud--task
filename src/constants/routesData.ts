const jsonData = [
  {
    name: "Home Page",
    locale: "Home.Page",
    path: "/",
    component: "modules/HomeModule",
    hideInMenu: true,
    exact: true,
  },
  {
    name: "Login",
    locale: "user.login",
    path: "/user/login",
    component: "modules/UserModule/Login",
    hideInMenu: true,
  },
  {
    path: "/dashboard",
    locale: "dashboard",
    name: "Dashboard",
    icon: "dashboard",
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
        accessTO: ["admin"], // Allow only admins to view this menu
        //and access this page
      },
      {
        path: "/dashboard/monitor",
        locale: "dashboard.monitor",
        component: "modules/DashboardModule/Monitor",
        name: "monitor",
        exact: true,
      },
      {
        path: "/dashboard/workplace",
        locale: "dashboard.workplace",
        component: "modules/DashboardModule/Workplace",
        name: "workplace",
        exact: true,
      },
    ],
  },
  {
    path: "/projects",
    locale: "projects",
    name: "Projects",
    icon: "projects",
    component: "modules/ProjectModule",
    redirect: "/projects/list", //Redirect /projects to
    ///projects/list
    routes: [
      {
        path: "/projects/list",
        locale: "projects.list",
        component: "modules/ProjectModule/projectList",
        name: "Projects",
        icon: "projects",
        exact: true,
      },
      {
        path: "/projects/:id",
        locale: "projects.details",
        component: "modules/ProjectModule/projectId",
        name: "Project Details",
        hideInMenu: true,
        icon: "projects",
        key: "projects",
        exact: true,
      },
      {
        path: "/projects/:id/settings",
        component: "modules/ProjectModule/projectSetting",
        locale: "projects.settings",
        icon: "settings",
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

const flattenArray: any = (arr: any) => {
  let result: any = [];

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
