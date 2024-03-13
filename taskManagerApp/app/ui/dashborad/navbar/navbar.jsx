"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navbar.module.css";
import { MdSearch } from "react-icons/md";
import MenuLink from "@/app/ui/dashborad/sidebar/menuLink/menuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {adminMenuItems, stuMenuItems } from "@/app/ui/dashborad/sidebar/menuLink/menuItems";
import { useState, useEffect } from 'react';


const Navbar = () => {

  const pathname = usePathname();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const { data: session } = useSession();
  // if (session) {
  //   console.log("Is Admin:", session.user.isAdmin);
  // }

  // const isAdmin= session.user.isAdmin;

  // // // Assuming adminMenuItems and stuMenuItems are defined elsewhere in your code
  // const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   // This code runs only on the client side where `window` is available
  //   const adminStatus = window.sessionStorage.getItem("isAdmin") === "true";
  //   setIsAdmin(adminStatus);
  //   console.log("========= isAdmin:", adminStatus);
  // }, []);

  const menuItems = false ? adminMenuItems : stuMenuItems;

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };



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
        <div className={styles.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className={styles.input}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className={styles.icons}>
          <div className={styles.item}>
            <FontAwesomeIcon
              icon={faEnvelope}
              fade
              size="lg"
              style={{ color: "#005dc1" }}
            />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <FontAwesomeIcon
              icon={faBell}
              shake
              size="lg"
              style={{ color: "#005dc1" }}
            />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.mobileMenuIcon} onClick={toggleDropdown}>
            <FontAwesomeIcon
              icon={faList}
              fade
              size="lg"
              style={{ color: "#005dc1" }}
            />
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
                      {/* <Link href={'/sidebar.jsx'}></Link> */}
                </ul>
                <button className={styles.logout}>
                  <Link href="/signup">Logout</Link>
                  <FontAwesomeIcon icon={faArrowRight} beat />
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
