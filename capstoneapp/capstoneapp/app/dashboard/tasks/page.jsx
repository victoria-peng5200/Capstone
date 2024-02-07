import Search from "@/app/ui/dashborad/search/search";
import React from "react";
import styles from "@/app/ui/dashborad/tasks/tasks.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashborad/pagination/pagination";
import { searchParams } from "next/navigation";

const TasksPage = async ({searchParams}) => {
  const search = searchParams?.search ||"";
  const page = searchParams?.page || 1;
  // const {count, users} = await fetchUsers(search, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Task..." />
        <Link href="/dashboard/tasks/add">
          <button className={styles.addButton}>Add Task</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Task ID</td>
            <td>Date</td>
            <td>Hours</td>
            <td>Location</td>
            <td>Description</td>
            <td>Action</td>
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
                  alt="user1"
                />
                John Doe
              </div>
            </td>
            <td>#1</td>
            <td>26.02.2024</td>
            <td>2 hrs</td>
            <td>Building #2</td>
            <td>Dinner with me</td>
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
                <Image
                  src="/avatar2.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt="user2"
                />
                Jane Random
              </div>
            </td>
            <td>#2</td>
            <td>26.02.2024</td>
            <td>2 hrs</td>
            <td>Building #2</td>
            <td>Moive night</td>
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
                <Image
                  src="/avatar3.png"
                  width={40}
                  height={40}
                  className={styles.userImage}
                  alt="user2"
                />
                Vince Doe
              </div>
            </td>
            <td>#3</td>
            <td>26.02.2024</td>
            <td>2 hrs</td>
            <td>Building #2</td>
            <td>Hot Yoga</td>
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

export default TasksPage;
