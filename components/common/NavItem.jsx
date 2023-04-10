import Link from "next/link";
import styles from "@/styles/Navlink.module.css";

export default function NavItem({ to, label, current, onClick }) {
	return (
		<div className={styles.navitem}>
			{current && <span className={styles.dot}></span>}
			<Link className={styles.navlink} href={to} onClick={onClick}>
				{label}
			</Link>
		</div>
	);
}
