import MenuLink from "./menuLink/menuLink.jsx";
import Image from "next/image.js";
import styles from "./sidebar.module.css";
import { auth, signOut } from "@/app/auth.js";
import {
  MdLogout,
} from "react-icons/md";
import {adminMenuItems, stuMenuItems } from "./menuLink/menuItems.jsx";

const Sidebar = async() => {

  const { user } = await auth();

  let menuItems;
  if (user && user.isAdmin) {
    menuItems = adminMenuItems;
  } else {
    menuItems = stuMenuItems;
  }

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src= {user.image || "/noavatar.png"}
          alt=""
          height="50"
          width="50"
          className={styles.userImage}
          priority
        ></Image>
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.name}</span>
          <span className={styles.userTitle}>Welcome Back !</span>
        </div>
      </div>

      <ul className={styles.list}>

        {menuItems.map((category) => (
          <div key={category.title}>
            <p className={styles.title}>{category.title}</p>
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
      <form action={async ()=>{
        "use server";
        await signOut();
      }}>
      <button className={styles.logout}>
          <MdLogout />
          Logout
      </button>
      </form>
    </div>
  );
};

export default Sidebar;