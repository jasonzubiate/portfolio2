import Link from "next/link";
import styles from "@/styles/HamburgerMenu.module.css";

export default function HamburgerMenu({ toggle, setToggle }) {
  return (
    <nav className={styles.menu}>
      <Link
        className={styles.link}
        href={"/"}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Work
      </Link>
      <Link
        className={styles.link}
        href={"/self"}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Self
      </Link>
      <Link
        className={styles.link}
        href={"/assets/doc/Jason_Zubiate_UX_Resume.pdf"}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Resume
      </Link>
    </nav>
  );
}
