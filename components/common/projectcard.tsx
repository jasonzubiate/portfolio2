import styles from "@styles/ProjectCard.module.css"
export default function projectcard(project:any) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{project.name}</h3>
      <div className={styles.roles}>
        {}
      </div>
      <p className={styles.description}>{project.description}</p>
    </div>
  )
}
