import styles from "./footer.scss";

export function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="div1">
          <img src="src\assets\img\footer-logo.png" alt="logo" />
        </div>
        <hr />
        <div className="div2">
          <h3>D.V.G. COMPANY</h3>
          <div>
            <figure>
              <img src="src\assets\img\footer-location.png" alt="" />
              <a href="">
                Cantavirski put bb <br />
                24000 Subotica, Srbija
              </a>
            </figure>
            <figure>
              <img src="src\assets\img\footer-phone.png" alt="" />
              <a href="">+381 24 568 555</a>
            </figure>
            <figure>
              <img src="src\assets\img\footer-mail.png" alt="" />
              <a href="">office@dvgcompany.com</a>
            </figure>
          </div>
        </div>
        <hr />
        <div className="div3">
          <ul>
            <li>
              <a href="#">O NAMA</a>
            </li>
            <li>
              <a href="">DVG PROZIVODI</a>
            </li>
            <li>
              <a href="">BRENDOVI</a>
            </li>
            <li>
              <a href="">DISTRIBUCIJA</a>
            </li>
            <li>
              <a href="">SARADNJA</a>
            </li>
            <li>
              <a href="">NOVOSTI</a>
            </li>
            <li>
              <a href="">KONTAKT</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="div4">
          <p>Pratite nas:</p>
          <div>
            <a href="https://www.facebook.com/dvgveleprodaja">
              <img src="src\assets\img\facebook.png" alt="facebooklink" />
            </a>
            <a href="">
              <img src="src\assets\img\tweeter.png" alt="twitterlink" />
            </a>
            <a href="">
              <img src="src\assets\img\youtube.png" alt="youtubelink" />
            </a>
            <a href="">
              <img src="src\assets\img\messinger.png" alt="messingerlink" />
            </a>
          </div>
        </div>
      </div>
      <div className="div5">
        <p>Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.</p>
        <a href="">Privatnost podataka</a>
        <a href="">Uslovi koriscenja</a>
        <p>
          Powered by <a href="https://www.studiopresent.rs/">StudioPresent</a>
        </p>
      </div>
    </footer>
  );
}
