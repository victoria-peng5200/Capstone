import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdOutlineTask,
  MdEventAvailable,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

// const menuItems = [
//   {
//     title: "Manager pages",
//     list: [
//       {
//         subtitle: "Dashboard",
//         path: "/dashboard",
//         icon: <MdDashboard />,
//       },
//       {
//         subtitle: "Calendar",
//         path: "/dashboard/adminCalendar",
//         icon: <MdAnalytics />,
//       },
//       {
//         subtitle: "Users",
//         path: "/dashboard/users",
//         icon: <MdSupervisedUserCircle />,
//       },
//       {
//         subtitle: "Tasks",
//         path: "/dashboard/tasks",
//         icon: <MdOutlineTask />,
//       },
//       {
//         subtitle: "Print Report",
//         path: "/dashboard/printreport",
//         icon: <MdAnalytics />,
//       },

//     ],
//   },
//   {
//     title: "Student Pages",
//     list: [
//       {
//         subtitle: "Calendar",
//         path: "/dashboard/calendar",
//         icon: <MdWork />,
//       },
//       {
//         subtitle: "My Tasks",
//         path: "/dashboard/MyTask",
//         icon: <MdAnalytics />,
//       },
//       {
//         subtitle: "Blogs",
//         path: "/dashboard/blogs",
//         icon: <MdPeople />,
//       },
//     ],
//   },
//   {
//     title: "User",
//     list: [
//       {
//         subtitle: "Settings",
//         path: "/dashboard/settings",
//         icon: <MdOutlineSettings />,
//       },
//       {
//         subtitle: "Help",
//         path: "/dashboard/help",
//         icon: <MdHelpCenter />,
//       },
//     ],
//   },
// ];

export const adminMenuItems = [
  {
    title: "Manager pages",
    list: [
      {
        subtitle: "News",
        path: "/news",
        icon: <MdDashboard />,
      },
      {
        subtitle: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        subtitle: "Calendar",
        path: "/dashboard/adminCalendar",
        icon: <MdAnalytics />,
      },
      {
        subtitle: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        subtitle: "Tasks",
        path: "/dashboard/tasks",
        icon: <MdOutlineTask />,
      },
      {
        subtitle: "Print Report",
        path: "/dashboard/printreport",
        icon: <MdAnalytics />,
      },

    ],
  },
  {
    title: "Manager Setting",
    list: [
      {
        subtitle: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        subtitle: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const stuMenuItems = [
  {
    title: "Student Pages",
    list: [
      {
        subtitle: "News",
        path: "/news",
        icon: <MdDashboard />,
      },
      {
        subtitle: "Calendar",
        path: "/dashboard/calendar",
        icon: <MdWork />,
      },
      {
        subtitle: "My Tasks",
        path: "/dashboard/MyTask",
        icon: <MdAnalytics />,
      },
      {
        subtitle: "Blogs",
        path: "/dashboard/blogs",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Student Setting",
    list: [
      {
        subtitle: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        subtitle: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
