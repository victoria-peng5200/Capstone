"use client";
import MenuLink from "./menuLink/menuLink.jsx";
import Image from "next/image.js";
import Link from "next/link";
import styles from "./sidebar.module.css";
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
      // {
      //   subtitle: "Tasks",
      //   path: "/dashboard/tasks",
      //   icon: <MdOutlineTask />,
      // },
      // {
      //   subtitle: "Events",
      //   path: "/dashboard/events",
      //   icon: <MdEventAvailable />,
      // },
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


const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/manager01.png"
          alt="manager"
          height="50"
          width="50"
          className={styles.useImage}
          priority
        ></Image>
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Manager</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((category) => (
          <div key={category.title}>
            <p className={styles.p}>{category.title}</p>
            <ul className={styles.list}>
              {category.list.map((item) => (
                <li key={item.subtitle} className={styles.cat}>
                  <MenuLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
 
      <button className={styles.logout}>
        <Link href="/signup">
          <MdLogout />
          Logout
         </Link> 
        </button>
    </div>
  );
};

export default Sidebar;
