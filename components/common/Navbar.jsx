import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";
import NavItem from "./NavItem";
import menu from "@/public/assets/icons/menu.png";
import close from "@/public/assets/icons/close.png";
import Image from "next/image";

export default function Navbar({ toggle, setToggle }) {
	const [currentPage, setCurrentPage] = useState("work");

	const handleNavClick = (page) => {
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
					current={currentPage === "work"}
					onClick={() => handleNavClick("work")}
				/>
				<NavItem
					to={"/Self"}
					label={"Self"}
					current={currentPage === "self"}
					onClick={() => handleNavClick("self")}
				/>
				{/* <NavItem
					to={"/music"}
					label={"Music"}
					current={currentPage === 'music'}
					onClick={() => handleNavClick("music")}
				/> */}
				<NavItem
					to={"/assets/doc/jasonzubiate.pdf"}
					label={"Resume"}
					current={currentPage === "resume"}
					onClick={() => handleNavClick("resume")}
				/>
			</div>
			<button
				className={styles.btn}
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{!toggle && (
					<Image
						className={styles.menu}
						src={menu}
						alt={"Menu"}
						width={24}
						height={24}
						quality={100}
					/>
				)}
				{toggle && (
					<Image
						className={styles.menu}
						src={close}
						alt={"Menu"}
						width={20}
						height={20}
						quality={100}
					/>
				)}
			</button>
		</nav>
	);
}
