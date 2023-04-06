export const routeDataBackup = [
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
    component: "pages/dashboard",
    routes: [
      {
        path: "/dashboard/analysis",
        locale: "dashboard.analysis",
        name: "analysis",
        component: "pages/dashboard/analysis",
        exact: true,
        accessTO: ["admin"], // Allow only admins to view this menu
        //and access this page
      },
      {
        path: "/dashboard/monitor",
        locale: "dashboard.monitor",
        component: "pages/dashboard/monitor",
        name: "monitor",
        exact: true,
      },
      {
        path: "/dashboard/workplace",
        locale: "dashboard.workplace",
        component: "pages/dashboard/workplace",
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
  //   component: "./404",
  // },
];
