import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/ProjectCard.module.css";
import rightArrow from "@/public/assets/icons/right-arrows.png";

type ProjectCardProps = {
  project: any;
};

export default function ProjectCard({ project }: ProjectCardProps) {
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
          {roleDatePairs.map((pair: any) => (
            <div key={pair.role}>
              <label className={styles.role_title}>{pair.role}</label>
              <p className={styles.role_date}>{pair.date}</p>
            </div>
          ))}
        </div>
        <p className={styles.description}>{project.description}</p>
        <Link className={styles.button} href={`/${project.name}`}>
          Visit Project{" "}
          <span>
            <Image
              className={styles.arrow}
              src={rightArrow}
              width={24}
              height={24}
              alt={`Visit ${project.name}`}
            />
          </span>
        </Link>
      </div>
      <div className={styles.card_img}>
        <Image
          className={styles.img}
          src={`/assets/img/${project.img}`}
          alt={project.name}
          width={745}
          height={400}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
