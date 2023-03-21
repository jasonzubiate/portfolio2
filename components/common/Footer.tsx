import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.label}>
        <label className={styles.label_title}>Contact</label>
        <label className={styles.label_content}>jzubiate@uci.edu</label>
      </div>
      <div className={styles.label}>
        <label className={styles.label_title}>Connect</label>
        <label className={styles.label_content}>
          <a href="https://www.linkedin.com/in/jasonzubiate/">Linkedin</a>
          <span> / </span>
          <a href="https://www.instagram.com/jason.zubiate/">Instagram</a>
          <span> / </span>
          <a href="https://github.com/jasonzubiate?tab=repositories">Github</a>
        </label>
      </div>
      <div className={styles.label}>
        <label className={styles.label_title}>Based In</label>
        <label className={styles.label_content}>Irvine, California</label>
      </div>
    </div>
  )
}
