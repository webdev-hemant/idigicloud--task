export const routeData = [
  {
    name: "Login",
    locale: "user.login",
    path: "user/login",
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
    component: "modules/UserModule/Login",
    redirect: "/projects/list", //Redirect /projects to
    ///projects/list
    routes: [
      {
        path: "/projects/list",
        locale: "projects.list",
        name: "Projects",
        icon: "projects",
        exact: true,
      },
      {
        path: "/projects/:id",
        locale: "projects.details",
        name: "Project Details",
        hideInMenu: true,
        icon: "projects",
        key: "projects",
        exact: true,
      },
      {
        path: "/projects/:id/settings",
        locale: "projects.settings",
        icon: "settings",
        name: "Settings",
        parentKey: "details",
        exact: true,
      },
    ],
  },
  // {
  //   path: "*",
  // component: "modules/UserModule/Login",
  // },
];

const flattenArray: any = (arr: any) => {
  let result: any = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i].routes)) {
      result = result.concat(flattenArray(arr[i].routes));
      delete arr[i].routes;
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

const flatArray = flattenArray(routeData);

export default flatArray;
