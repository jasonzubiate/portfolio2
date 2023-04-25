import Image from "next/image";
import styles from "@/styles/SmallCard.module.css";

export default function SmallCard({ project }) {
  return (
    <div className={styles.card}>
      <a href="https://www.socalbeautymedspa.com/">
        <Image
          className={styles.img}
          src={`/assets/img/${project.img}`}
          alt={project.name}
          width={400}
          height={240}
          priority
        />
      </a>
      <label className={styles.label} htmlFor="title">
        {project.name}
      </label>
    </div>
  );
}
