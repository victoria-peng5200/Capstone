import React from "react";
import styles from "@/app/ui/dashborad/login/login.module.css";
import Loginform from "./loginform/loginform";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Loginform />
    </div>
  );
};

export default LoginPage;
