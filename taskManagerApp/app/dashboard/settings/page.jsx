import Head from "next/head";
import Link from "next/link";
import styles from "./setting.module.css"; // Assuming you have CSS modules set up

export default function Settings() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Settings</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Settings</h1>

        <div className={styles.settingsBlock}>
          <label htmlFor="language-select" className={styles.label}>
            Language
          </label>
          <select
            id="language-select"
            name="language"
            className={styles.select}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            {/* Add other language options */}
          </select>
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading}>Account Details</h2>
          {/* Account details form or display */}
          <p>Email: user@example.com</p>
          <Link href="/update-email" className={styles.link}>
            Update Email
          </Link>
          <p>Username: user123</p>
          <Link href="/update-username" className={styles.link}>
            Update Username
          </Link>
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading}>Change Password</h2>
          <Link href="/change-password" className={styles.link}>
            Change Password
          </Link>
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading}>Subscription</h2>
          <p>Current Plan: Pro</p>
          <Link href="/update-subscription" className={styles.link}>
            Update Subscription
          </Link>
        </div>

        <div className={styles.settingsBlock}>
          <button className={styles.button}>Logout</button>
        </div>
      </main>
    </div>
  );
}

// function handleLogout() {
//   // Implement logout logic here
// }
