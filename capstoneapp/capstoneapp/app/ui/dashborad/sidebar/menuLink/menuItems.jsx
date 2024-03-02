import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdHelpCenter,
    MdOutlineTask,
    MdEventAvailable,
  } from "react-icons/md";
  
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          subtitle: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          subtitle: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          subtitle: "Calendar",
          path: "/dashboard/calendar",
          icon: <MdOutlineTask />,
        },
        {
          subtitle: "Blog",
          path: "/dashboard/blog",
          icon: <MdEventAvailable />,
        },
      ],
    },
    {
      title: "User",
      list: [
        // {
        //   subtitle: "Settings",
        //   path: "/dashboard/settings",
        //   icon: <MdOutlineSettings />,
        // },
        {
          subtitle: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
        
      ],
    },
  ];
  
  export default menuItems
  