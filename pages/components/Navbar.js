import styles from "../../styles/Home.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navi}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a href="/" className={styles.a}>
            Home
          </a>
        </li>
        {/* } <li className={styles.li}>
          <a href="/Admin/Login" className={styles.a}>
            Login
          </a>
        </li>
        <li className={styles.li}>
          <a href="/Admin/Register" className={styles.a}>
            Register
          </a>
  </li>*/}
      </ul>
    </nav>
  );
};

export default Navbar;
