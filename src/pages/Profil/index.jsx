import './profil.css';
import calories_icon from '../../assets/calories-icon.png';
import carbs_icon from '../../assets/carbs-icon.png';
import protein_icon from '../../assets/protein-icon.png';
import fat_icon from '../../assets/fat-icon.png';
import InfosCard from '../../components/InfosCard';
import Datas from '../../datas/datas.json';
import UserDatas from '../../utils/models/userDatas';

// console.log(typeof UserData +'type');
function Profil() {

    const userDatas = new UserDatas(Datas);
    // console.log(userData.age);
    // const user_key_datas = Datas.user_main_datas.keyData;
  return (
    <div className="profil">
      <h1>Bienvenue <span className="red">{userDatas.firstName}</span></h1>
      <span className="title_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
      <section className="profil_graph">
        <div className="chart-01"><div className='background_chart'>A</div></div>
        <div className="infos">
            <div className="info-01">
                <InfosCard name="Calories" infos={userDatas.calorieCount} icon={calories_icon}/>
            </div>
            <div className="info-02">
                <InfosCard name="Proteïne"  infos={userDatas.proteinCount} icon={protein_icon}/>
            </div>
            <div className="info-03">
                <InfosCard name="Glucides"  infos={userDatas.carbohydrateCount} icon={carbs_icon}/>
            </div>
            <div className="info-04">
                <InfosCard name="Lipides"  infos={userDatas.lipidCount} icon={fat_icon}/>
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
