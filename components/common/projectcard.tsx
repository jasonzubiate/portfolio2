import styles from "styles/Home.module.css";
export default function ProjectCard(project: any) {
  const { roles, dates } = project;
  const roleDatePairs = roles.map((role, index) => {
    return {
      role: role,
      date: dates[index],
    };
  });

  return (
    <div className={styles.card}>
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
    </div>
  );
}
