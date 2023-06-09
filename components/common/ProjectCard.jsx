import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";
import rightArrow from "@/public/assets/icons/right-arrows.png";

export default function ProjectCard({ project }) {
	const { roles, dates } = project;
	const roleDatePairs = roles.map((role, index) => {
		return {
			role: role,
			date: dates[index],
		};
	});

	return (
		<div className={styles.card}>
			<div className={styles.card_info}>
				<h3 className={styles.name}>{project.name}</h3>
				<div className={styles.roles}>
					{roleDatePairs.map((pair) => (
						<div key={pair.role}>
							<label className={styles.role_title}>{pair.role}</label>
							<p className={styles.role_date}>{pair.date}</p>
						</div>
					))}
				</div>
				<p className={styles.description}>{project.description}</p>
				<Link className={styles.button} href={`/${project.url}`}>
					Visit Project{" "}
					<span>
						<Image
							className={styles.arrow}
							src={rightArrow}
							width={20}
							height={24}
							alt={`Visit ${project.name}`}
						/>
					</span>
				</Link>
			</div>
			<div className={styles.card_img}>
				<img
					className={styles.img}
					src={`/assets/img/${project.img}`}
					alt={project.name}
					quality={100}
					priority
				/>
			</div>
		</div>
	);
}
