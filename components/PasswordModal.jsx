import React, { useState } from "react";
import styles from "@/styles/PasswordModal.module.css";

export default function PasswordModal({ setModalState }) {
	const [password, setPassword] = useState("");

	function handleSubmit() {
		const correctPassword = "jz90521308"; // change this to your actual password
		if (password === correctPassword) {
			// do something if password is correct
      setModalState(false)
		} else {
			// show an error message if password is incorrect
			alert("Incorrect password. Please try again.");
		}
	}

	return (
		<div className={styles.background}>
			<div className={styles.modal}>
				<h2 className={styles.h2}>Protected Page</h2>
				<p className={styles.p_italic}>
					This project is currently protected by an NDA. If you’d like access
					please{" "}
					<span className={styles.p_italic_bold}>
						<a className={styles.link} href="mailto:jzubiate@uci.edu">
							request
						</a>
					</span>{" "}
					a password.
				</p>
				<input
					className={styles.input}
					type="text"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className={styles.btn_group}>
					<button
						className={`${styles.btn} ${styles["primary-cta"]}`}
						onClick={handleSubmit}
					>
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
