import styles from "@/styles/ProjectHeader.module.css";
import Link from "next/link";

export default function ProjectHeader({ project }) {
  return (
    <div className={styles.header}>
      <h1>{project.h1}</h1>
      <div className={styles.project_description}>
        <label className={styles.label}>Description</label>
        <p className={styles.p}>
          Managed a team of designers during a comprehensive user testing
          session for a mobile application focused on nutritional health
          management, involving a sizeable cohort of 100 participants.
        </p>
      </div>
      <div className={styles.info_row}>
        <div className={styles.info}>
          <label className={styles.label}>Role</label>
          <p className={styles.p}>UX Lead, Frontend Developer</p>
        </div>
        <div className={styles.info}>
          <label className={styles.label}>Timeline</label>
          <p className={styles.p}>
            June - September 2022 (12 weeks) January - Present
          </p>
        </div>
        <div className={styles.info}>
          <label className={styles.label}>Tools</label>
          <p className={styles.p}>Figma, Miro, React, Next.js, Smartlook</p>
        </div>
        <div className={styles.disclaimer}>
          <p className={styles.italic_p}>
            This project is currently protected by an NDA. If you’d like access
            please request a password.
          </p>
					<button className={styles.btn}>View Project</button>
        </div>
      </div>
    </div>
  );
}
