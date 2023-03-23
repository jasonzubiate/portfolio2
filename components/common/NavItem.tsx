import Link from "next/link";
import styles from "@/styles/Navlink.module.css";

interface NavItemProps {
  to: string;
  label: string;
  currentPage: string;
  onClick: (page: string) => void;
}

export default function NavItem({ to, label, currentPage, onClick }: NavItemProps) {
	const isActive = currentPage === label.toLowerCase();

	return (
		<div className={styles.navitem}>
			{isActive && <span className={styles.dot}></span>}
			<Link className={styles.navlink} href={to}>
				{label}
			</Link>
		</div>
	);
}
