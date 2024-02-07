import React from "react";
import styles from "@/app/ui/dashborad/login/login.module.css";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.title}>Sign in</h1>
        <p className={styles.welcome}>Welcome back!</p>
        <input type="text" name="" id="" placeholder="Name" />
        <input type="password" name="" id="" placeholder="Password" />
        <Link href="/dashboard">
        <button>Log In</button>
        </Link>
        <span>
        <p className={styles.noaccount}>Don&apos;t have an account? <span>Sign Up</span></p>
        </span>
        
      </form>
    </div>
  );
};

export default LoginPage;
