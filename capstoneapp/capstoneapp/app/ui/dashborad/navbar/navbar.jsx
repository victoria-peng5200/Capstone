"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
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
import { useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";
import MenuLink from "@/app/ui/dashborad/sidebar/menuLink/menuLink";
import menuItems from "@/app/ui/dashborad/sidebar/menuLink/menuItems";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  // The DropdownMenu component

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image
          src={logo}
          width={60}
          height={60}
          alt=""
          className={styles.image}
        />
        {pathname.split("/").pop()}
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <div className={styles.mobileMenuIcon} onClick={toggleDropdown}>
            <RxDropdownMenu size={20} />
            {isDropdownOpen && (
              <div className={styles.dropdownMenu} onMouseLeave={closeDropdown}>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
