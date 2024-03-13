import React from "react";
import styles from "@/app/ui/dashborad/users/profile.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/utility/data";
import { updateUser } from "@/app/utility/action";

const ProfilePage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.image || "/noavatar.png"} alt="user profile img" layout="fill" objectFit="cover"  />
        </div>
        {user.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="name" placeholder={user.name} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password"  placeholder="******"/>
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            defaultValue={user.isAdmin.toString()}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label >Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            defaultValue={user.isActive.toString()}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
