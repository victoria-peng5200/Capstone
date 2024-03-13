import React from "react";
import Image from "next/image";
import styles from "@/app/ui/dashborad/reportlist/reportlist.module.css";

const Reportlist = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hours Tracking</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Hours (Feb)</td>
            <td>Yearly Hours</td>
            <td>Hour Bank</td>
            <td>Next Event</td>
            <td>Event Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar1.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt=""
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={styles.hour}>28 </span>/ 30
            </td>
            <td>
              <span className={styles.hour}>58 </span>/ 360
            </td>
            <td>Short: 2 hrs</td>
            <td>Feb 3, 2024</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar2.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt=""
                />
                Jane Random
              </div>
            </td>
            <td>
              <span className={styles.hour}>31 </span>/ 30
            </td>
            <td>
              <span className={styles.hour}>61 </span>/ 360
            </td>
            <td>Over: 1 hr</td>
            <td>Feb 6, 2024</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar3.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt=""
                />
                Vince Doe
              </div>
            </td>
            <td>
              <span className={styles.hour}>30 </span>/ 30
            </td>
            <td>
              <span className={styles.hour}>60 </span>/ 360
            </td>
            <td>0</td>
            <td>Feb 14, 2024</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Registered</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reportlist;
