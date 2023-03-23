import styles from "@/styles/ProjectHeader.module.css";

export default function ProjectHeader({ project }) {
	return (
		<div className={styles.header}>
			<h1>{project.name}</h1>
		</div>
	);
}
