import { addUser } from "@/app/utility/action";
import styles from "@/app/ui/dashborad/users/adduser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Enter username" name="name" required />
        <input type="email" placeholder="Enter email" name="email" required />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          required
        />
        <input type="phone" placeholder="Enter phone number" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="image"
          id="imageinfo"
          rows="6"
          placeholder="Please paste your Image URL"
        ></textarea>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
