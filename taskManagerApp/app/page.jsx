
import React from "react";
import styles from "@/app/ui/home/home.module.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <Image src={logo} width={300} height={300} alt="" className={styles.image} />
        <div className={styles.logoheader}>
        <h1 className={styles.welcome}>Welcome to</h1>
        <p className={styles.logoname}>
          Canadian Alliance for Intergenerational Living
        </p>
        </div>
        
        <button className={`${styles.button} ${styles.signup}`}>Sign Up</button>
        
        <Link href="/login">
        <button className={`${styles.button} ${styles.signin}`}>Sign In</button>
        </Link>
      
      </form>
    </div>
  );
};

export default Homepage