import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/app/ui/dashborad/card/card.module.css";



const Card3 = ({}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.tasktitle}>Feb Total Events</span>
        <span className={styles.total}>60</span>
        <span className={styles.detail}>
          <span className={styles.percent}>8% </span>
          <span>More than previous month</span>
        </span>
      </div>
    </div>

    
  );
};

export default Card3;
