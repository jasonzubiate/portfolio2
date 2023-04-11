import styles from "@/styles/ProjectHeader.module.css";
import Link from "next/link";

export default function ProjectHeader({ project }) {
	return (
		<div className={styles.header}>
			<h1 className={styles.h1}>{project.name}</h1>
			<div className={styles.project_description}>
				<label className={styles.label}>Description</label>
				<p className={styles.p}>{project.description}</p>
			</div>
			<div className={styles.info_row}>
				<div className={styles.info}>
					<label className={styles.label}>Role</label>
					<p className={styles.p}>{project.roles.join(", ")}</p>
				</div>
				<div className={styles.info}>
					<label className={styles.label}>Timeline</label>
					<p className={styles.p}>{project.dates.join(", ")}</p>
				</div>
				<div className={styles.info}>
					<label className={styles.label}>Tools</label>
					<p className={styles.p}>{project.tools.join(", ")}</p>
				</div>
			</div>
			{project.NDA && (
				<div className={styles.disclaimer}>
					<p className={styles.p_italic}>
						This project is currently protected by an NDA. If you’d like access
						please <span className={styles.p_italic_bold}>request</span> a
						password.
					</p>
					<button className={styles.btn}>View Project</button>
				</div>
			)}
		</div>
	);
}
