import React, { useState } from "react";
import styles from "@/styles/PasswordModal.module.css";

export default function PasswordModal({ setModalState }) {
	return (
		<div className={styles.modal}>
			<h1>Protected Page</h1>
			<p className={styles.p_italic}>
				This project is currently protected by an NDA. If you’d like access
				please <span className={styles.p_italic_bold}>request</span> a password.
			</p>
			<button
				className={`${styles.btn} ${styles["primary-cta"]}`}
				onClick={handleButtonClick}
			>
				Enter Password
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
	);
}