import './profil.css';
import calories_icon from '../../assets/calories-icon.png';
import carbs_icon from '../../assets/carbs-icon.png';
import protein_icon from '../../assets/protein-icon.png';
import fat_icon from '../../assets/fat-icon.png';
import InfosCard from '../../components/InfosCard';
import Datas from '../../datas/datas.json';
// import UserData from '../../utils/models/userData.js';

function Profil() {
    // const user_key_datas = new UserData(Datas.user_main_datas.keyData);
    const user_key_datas = Datas.user_main_datas.keyData;
    console.log(user_key_datas);
  return (
    <div className="profil">
      <h1>Bienvenue <span className="red">{Datas.user_main_datas.userInfos.firstName}</span></h1>
      <span className="title_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <section className="profil_graph">
        <div className="chart-01"><div className='background_chart'>A</div></div>
        <div className="infos">
            <div className="info-01">
                <InfosCard name="Calories" infos={user_key_datas.calorieCount} icon={calories_icon}/>
            </div>
            <div className="info-02">
                <InfosCard name="Proteïne"  infos={user_key_datas.proteinCount} icon={protein_icon}/>
            </div>
            <div className="info-03">
                <InfosCard name="Glucides"  infos={user_key_datas.carbohydrateCount} icon={carbs_icon}/>
            </div>
            <div className="info-04">
                <InfosCard name="Lipides"  infos={user_key_datas.lipidCount} icon={fat_icon}/>
            </div>
        </div>
        <div className="chart-02"><div className='background_chart'>B</div></div>
        <div className="chart-03"><div className='background_chart'>C</div></div>
        <div className="chart-04"><div className='background_chart'>D</div></div>
      </section>
    </div>
  );
}

export default Profil;
