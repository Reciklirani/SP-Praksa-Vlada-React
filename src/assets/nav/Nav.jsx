import styles from "./nav.module.scss";

export function Nav() {
  return (
    <nav>
      <div className={styles.navi}>
        <button>
          <h5>O NAMA</h5>
          <p>vizija za uspeh</p>
        </button>
        <button>
          <h5>DVG PROIZVODI</h5>
          <p>nasi prozivodi</p>
        </button>
        <button>
          <h5>BRENDOVI</h5>
          <p>koje zastupamo</p>
        </button>
        <button>
          <h5>DISTRIBUCIJA</h5>
          <p>logistika i operativa</p>
        </button>
        <button>
          <h5>SARADNJA</h5>
          <p>prosirenje ponude</p>
        </button>
        <button>
          <h5>NOVOSTI</h5>
          <p>aktualenosti</p>
        </button>
        <button>
          <h5>KONTAKT</h5>
          <p>kontaktirajte nas</p>
        </button>
      </div>
    </nav>
  );
}
