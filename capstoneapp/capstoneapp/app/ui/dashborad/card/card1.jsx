import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/app/ui/dashborad/card/card.module.css";



const Card1 = ({}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.tasktitle}>Feb Total Volunteers</span>
        <span className={styles.total}>12</span>
        <span className={styles.detail}>
          <span className={styles.percent}>12% </span>
          <span>More than previous month</span>
        </span>
      </div>
    </div>

    
  );
};

export default Card1;
