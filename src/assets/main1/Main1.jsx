import styles from "./main1.scss";

export function Main1() {
  return (
    <div className="main1">
      <div className="slika">
        <img
          src="src\assets\img\company.jpg"
          alt="company building"
          width="100%"
        />
      </div>
      <div className="text">
        <div className="text-naslov">
          <h2>DVG Company</h2>
          <div className="red"></div>
          <h3>Veleprodaja i maloprodaja kozmetike i kucne hemije</h3>
          <div className="grey"></div>
        </div>
        <div className="text-text">
          <p>
            DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u
            Subotici. <br />
            Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne
            hemije. <br />U potpunosti je u privatnom vlasništvu, sa sedištem u
            Subotici. Tu se nalazi distrubutivni centar i poslovne prostorije,
            sa ukupno 3000m2 magacinskog prostora koji zadovoljava sve segmente
            u pogledu smeštaja, čuvanja i plasiranja robe.
          </p>
          <button>Saznajte vise o nama</button>
        </div>
      </div>
    </div>
  );
}
