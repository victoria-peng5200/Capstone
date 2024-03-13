import Search from "@/app/ui/dashborad/search/search";
import React from "react";
import styles from "@/app/ui/dashborad/events/events.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashborad/pagination/pagination";

const EventsPage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for Event..." />
          <Link href="/dashboard/events/addevent">
            <button className={styles.addButton}>Add Events</button>
          </Link>
      
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Event</td>
            <td>Status</td>
            <td>Date</td>
            <td>Hours</td>
            <td>Location</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar1.png" width={40} height={40} className={styles.userImage} alt=""/>
                John Doe
              </div>
            </td>
            <td>Dinner with me</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>26.02.2024</td>
            <td>2 hrs</td>
            <td>Building #2</td>
            <td>
              <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
          <td>
              <div className={styles.user}>
                <Image src="/avatar2.png" width={40} height={40} className={styles.userImage} alt=""/>
                Jane Random
              </div>
            </td>
            <td>Movie night</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>26.02.2024</td>
            <td>1.5 hrs</td>
            <td>Building #1</td>
            <td>
              <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
          <td>
              <div className={styles.user}>
                <Image src="/avatar3.png" width={40} height={40} className={styles.userImage} alt=""/>
                Vince Doe
              </div>
            </td>
            <td>Group fitness class</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>
                Done
              </span>
            </td>
            <td>26.02.2024</td>
            <td>2 hrs</td>
            <td>Fitness Center</td>
            <td>
              <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.view}`}>
                  View
                </button>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default EventsPage;
