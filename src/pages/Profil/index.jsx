import './profil.css';
import calories_icon from '../../assets/calories-icon.png';
import carbs_icon from '../../assets/carbs-icon.png';
import protein_icon from '../../assets/protein-icon.png';
import fat_icon from '../../assets/fat-icon.png';
import InfosCard from '../../components/InfosCard';
import Score from '../../components/Score';
import Performances from '../../components/Performances';
import Sessions from '../../components/Sessions';
import Activity from '../../components/Activity';
// import Datas from '../../datas/datas.json';
import { useApi } from '../../utils/Api';
import UserDatas from '../../utils/models/userDatas';
import PerformanceDatas from '../../utils/models/performanceDatas';
import SessionsDatas from '../../utils/models/sessionsDatas';
import ActivityDatas from '../../utils/models/activityDatas';

// console.log(typeof UserData +'type');

 function Profil() {
    const  userId = 12;
    const  apiUserData  =  useApi(`http://localhost:3000/user/${userId}`);
    const  apiPerformanceData  =  useApi(`http://localhost:3000/user/${userId}/performance`);
    const  apiSessionData  =  useApi(`http://localhost:3000/user/${userId}/average-sessions`);
    const  apiActivityData  =  useApi(`http://localhost:3000/user/${userId}/activity`);
    let userDatas = {};
    let performanceDatas = {};
    let sessionsDatas = {};
    let activityDatas = {};
 
    if(apiUserData && apiPerformanceData && apiSessionData && apiActivityData){ 
      
      userDatas = new UserDatas(apiUserData.data);
      performanceDatas = new PerformanceDatas(apiPerformanceData.data);
      sessionsDatas = new SessionsDatas(apiSessionData.data);
      activityDatas = new ActivityDatas(apiActivityData.data); 
      console.log(activityDatas);
 
      return (
        <div className="profil">
          <h1>Bienvenue <span className="red">{userDatas.firstName}</span></h1>
          <span className="title_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          <section className="profil_graph">
            <div className="chart-01"><Activity  datas={activityDatas.datas}/></div>
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
            <div className="chart-02"><Sessions datas={sessionsDatas.datas}/></div>
            <div className="chart-03"><Performances datas={performanceDatas.datas}/></div>
            <div className="chart-04"><Score score={userDatas.todayScore} /></div>
          </section>
        </div>
      );
   }else{

    return (
      <div className="profil">
          <span className="title_text">Page en cours de chargement ...</span>
      </div>
     );

   }
}

export default Profil;
