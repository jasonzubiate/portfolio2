import React, { useState } from "react";
import styles from "@/styles/PasswordModal.module.css";

export default function PasswordModal({ setModalState }) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <h2>Protected Page</h2>
        <p className={styles.p_italic}>
          This project is currently protected by an NDA. If you’d like access
          please <span className={styles.p_italic_bold}>request</span> a
          password.
        </p>
				<input className={styles.input} type="text" placeholder="Enter password" />
        <div className={styles.btn_group}>
				<button className={`${styles.btn} ${styles["primary-cta"]}`}>
          Submit
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            setModalState(false);
          }}
        >
          Close
        </button>
				</div>
      </div>
    </div>
  );
}
