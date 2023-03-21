import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_icon}>
        <Link className={styles.navlink} href={"/"}>
          Jason Zubiate
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link className={styles.navlink} href={"/"}>
          Work
        </Link>
        <Link className={styles.navlink} href={"/self"}>
          Self
        </Link>
        <Link className={styles.navlink} href={"/music"}>
          Music
        </Link>
        <Link className={styles.navlink} href={"/"}>
          Resume
        </Link>
      </div>
    </nav>
  );
}
