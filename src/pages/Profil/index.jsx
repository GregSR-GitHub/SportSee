import './profil.css';

function Profil() {
  return (
    <div className="profil">
      <h1>Bienvenue <span className="red">Thomas</span></h1>
      <span className="title_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <section className="profil_graph">
        <div className="chart-01">A</div>
        <div className="infos">
            <div className="info-01">B</div>
            <div className="info-02">C</div>
            <div className="info-03">D</div>
            <div className="info-04">E</div>
        </div>
        <div className="chart-02">F</div>
        <div className="chart-03">G</div>
        <div className="chart-04">H</div>
      </section>
    </div>
  );
}

export default Profil;
