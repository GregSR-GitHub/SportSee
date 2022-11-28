/**
 * Display the profil page
 * @return { HTMLElement }
 */

import './profil.css';
import InfosCard from '../../components/InfosCard';
import Score from '../../components/Score';
import Performances from '../../components/Performances';
import Sessions from '../../components/Sessions';
import Activity from '../../components/Activity';
import { useApi } from '../../utils/Api';
import UserDatas from '../../utils/models/userDatas';
import PerformanceDatas from '../../utils/models/performanceDatas';
import SessionsDatas from '../../utils/models/sessionsDatas';
import ActivityDatas from '../../utils/models/activityDatas';

 function Profil() {
    const  userId = 12;
    const  apiUserData =  useApi(`http://localhost:3000/user/${userId}`);
    const  apiPerformanceData  =  useApi(`http://localhost:3000/user/${userId}/performance`);
    const  apiSessionData  =  useApi(`http://localhost:3000/user/${userId}/average-sessions`);
    const  apiActivityData  =  useApi(`http://localhost:3000/user/${userId}/activity`);
    console.log(apiUserData);

    // Display Profil page only if data are loaded
    if(!apiUserData.isLoading && !apiPerformanceData.isLoading && !apiSessionData.isLoading && !apiActivityData.isLoading){ 
      // Don't display Profil page only if there is a Api Error
      if(!apiUserData.error && !apiPerformanceData.error && !apiSessionData.error && !apiActivityData.error){ 
 
        let userDatas = new UserDatas(apiUserData.datas.data);
        let performanceDatas = new PerformanceDatas(apiPerformanceData.datas.data);
        let sessionsDatas = new SessionsDatas(apiSessionData.datas.data);
        let activityDatas = new ActivityDatas(apiActivityData.datas.data); 

        // console.log(activityDatas);
        return (
          <div className="profil">
            <h1>Bienvenue <span className="red">{userDatas.firstName}</span></h1>
            <span className="title_text">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            <section className="profil_graph">
              <div className="chart-01"><Activity  datas={activityDatas.datas}/></div>
              <div className="infos">
                  <div className="info-01">
                      <InfosCard name="Calories" infos={userDatas.calorieCount}/>
                  </div>
                  <div className="info-02">
                      <InfosCard name="Proteïne"  infos={userDatas.proteinCount}/>
                  </div>
                  <div className="info-03">
                      <InfosCard name="Glucides"  infos={userDatas.carbohydrateCount}/>
                  </div>
                  <div className="info-04">
                      <InfosCard name="Lipides"  infos={userDatas.lipidCount}/>
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
              <span className="title_text">Les données de ce profil n'existent pas ... <br /> Veuillez contacter le support.</span>
          </div>
         );
      }
   }else{

    return (
      <div className="profil">
          <span className="title_text">Page en cours de chargement ...</span>
      </div>
     );

   }
}

export default Profil;
