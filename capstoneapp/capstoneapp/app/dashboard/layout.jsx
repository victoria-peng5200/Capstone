"use client";
import Sidebar from "@/app/ui/dashborad/sidebar/sidebar";
import Navbar from "@/app/ui/dashborad/navbar/navbar";
import styles from "../ui/dashborad/dashboard.module.css";


const Layout = ({ children }) => {
  
  return (
    <div className={styles.container}>

      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
