import styles from "@/styles/InfoCard.module.css";

export default function InfoCard({ content }) {
  return <div className={styles.card}>{content}</div>;
}
