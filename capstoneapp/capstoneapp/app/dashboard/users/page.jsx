import Search from "@/app/ui/dashborad/search/search";
import React from "react";
import styles from "@/app/ui/dashborad/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashborad/pagination/pagination";
import { fetchUsers } from "@/app/utility/data";

const UsersPage = async ({searchParams}) => {
  const search = searchParams?.search ||"";
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(search, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for Student..." />
        <Link href="/dashboard/users/adduser">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Registed At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.image || "/noavatar.png"}
                    width={40}
                    height={40}
                    className={styles.userImage}
                    alt="user1"
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Student"}</td>
              <td>{user.isActive ? "Active" : "passive"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.name}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  );
};

export default UsersPage;
