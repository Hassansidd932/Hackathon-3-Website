import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <button className={styles.icon}>🔍</button>
      </div>
      <div className={styles.centerSection}>
        <Link href="/">
          <a className={styles.logo}>Avion</a>
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link href="/cart">
          <a className={styles.icon}>🛒</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
