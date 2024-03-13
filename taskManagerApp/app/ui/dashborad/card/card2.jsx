import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/app/ui/dashborad/card/card.module.css";



const Card2 = ({}) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.tasktitle}>Feb Total Hours</span>
        <span className={styles.total}>150</span>
        <span className={styles.detail}>
          <span className={styles.percent}>5%</span>
          <span>More than previous month</span>
        </span>
      </div>
    </div>

    
  );
};

export default Card2;
