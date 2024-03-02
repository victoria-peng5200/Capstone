"use client";
import MenuLink from "./menuLink/menuLink.jsx";
import Image from "next/image.js";
import Link from "next/link";
import styles from "./sidebar.module.css";
import menuItems from "./menuLink/menuItems.jsx"
import {
  MdLogout,
} from "react-icons/md";

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
