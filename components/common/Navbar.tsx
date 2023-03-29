import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";
import NavItem from "./NavItem";

export default function Navbar() {
	const [currentPage, setCurrentPage] = useState("work");

	const handleNavClick = (page: string) => {
    console.log('handleNavClick', page);
		setCurrentPage(page);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_icon}>
				<Link className={styles.logo} href={"/"}>
					Jason Zubiate
				</Link>
			</div>
			<div className={styles.navlinks}>
				<NavItem
					to={"/"}
					label={"Work"}
					current={currentPage === 'work'}
					onClick={() => handleNavClick("work")}
				/>
				<NavItem
					to={"/self"}
					label={"Self"}
					current={currentPage === 'self'}
					onClick={() => handleNavClick("self")}
				/>
				{/* <NavItem
					to={"/music"}
					label={"Music"}
					current={currentPage === 'music'}
					onClick={() => handleNavClick("music")}
				/> */}
				<NavItem
					to={"/resume"}
					label={"Resume"}
					current={currentPage === 'resume'}
					onClick={() => handleNavClick("resume")}
				/>
			</div>
		</nav>
	);
}
