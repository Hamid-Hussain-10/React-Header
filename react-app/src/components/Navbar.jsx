import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Hamid</span><span className={styles.logoHighlight}>Hussain</span>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">About</a></li>
        <li className={styles.navItem}><a href="#">Services</a></li>
        <li className={styles.navItem}><a href="#">Tour Packages</a></li>
        <li className={styles.navItem}><a href="#">Pages</a></li>
        <li className={styles.navItem}><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;
