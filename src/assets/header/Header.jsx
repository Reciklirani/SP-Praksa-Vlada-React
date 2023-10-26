import styles from "./header.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <div className={styles.logoleft}>
          <div>
            <input
              type="checkbox"
              id="dark-mode"
              className={styles["toggle-theme"]}
            />
            <label htmlFor="dark-mode"></label>
          </div>
          <img src="src\assets\img\footer-logo.png" alt="logo" />
          <div className={styles.logotitle}>
            <h3>DVG COMPANY</h3>
            <p>SUBOTICA</p>
          </div>
        </div>
        <div className={styles.logoright}>
          <a href="#">Srpski</a>
          <a href="#">English</a>
          <a href="#">Magyar</a>
        </div>
      </div>
    </header>
  );
}
