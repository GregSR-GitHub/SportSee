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
// import Datas from '../../datas/datas.json'; // Mocked datas
import PerformanceDatas from '../../utils/models/performanceDatas';
import SessionsDatas from '../../utils/models/sessionsDatas';
import ActivityDatas from '../../utils/models/activityDatas';
import { useParams } from 'react-router-dom'

 function Profil() {
    let { userId } = useParams()
    //if no param use this id
    !userId && (userId='12')
    const  apiUserData =  useApi(`http://localhost:3000/user/${userId}`);
    const  apiPerformanceData  =  useApi(`http://localhost:3000/user/${userId}/performance`);
    const  apiSessionData  =  useApi(`http://localhost:3000/user/${userId}/average-sessions`);
    const  apiActivityData  =  useApi(`http://localhost:3000/user/${userId}/activity`);

    // Display Profil page only if datas are loaded (Must be change for true if you use the mocked data)
    if(!apiUserData.isLoading && !apiPerformanceData.isLoading && !apiSessionData.isLoading && !apiActivityData.isLoading){ 
      // Don't display Profil page only if there is a Api Error (Must be change for true if you use the mocked data)
      if(!apiUserData.error && !apiPerformanceData.error && !apiSessionData.error && !apiActivityData.error){ 
 
        // Use Mocked datas
        // let userDatas = new UserDatas(Datas.user_main_datas);
        // let performanceDatas = new PerformanceDatas(Datas.user_performance);
        // let sessionsDatas = new SessionsDatas(Datas.user_sessions);
        // let activityDatas = new ActivityDatas(Datas.user_activity); 

        // Use Api datas
        let userDatas = new UserDatas(apiUserData.datas.data);
        let performanceDatas = new PerformanceDatas(apiPerformanceData.datas.data);
        let sessionsDatas = new SessionsDatas(apiSessionData.datas.data);
        let activityDatas = new ActivityDatas(apiActivityData.datas.data); 

        return (
          <div className="profil">
            <h1>Bienvenue <span className="red">{userDatas.firstName}</span></h1>
            <span className="title_text">F??licitation ! Vous avez explos?? vos objectifs hier ????</span>
            <section className="profil_graph">
              <div className="chart-01"><Activity  datas={activityDatas.datas}/></div>
              <div className="infos">
                  <div className="info-01">
                      <InfosCard name="Calories" infos={userDatas.calorieCount}/>
                  </div>
                  <div className="info-02">
                      <InfosCard name="Prote??ne"  infos={userDatas.proteinCount}/>
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
              <span className="title_text">Les donn??es de ce profil n'existent pas ... <br /> Veuillez contacter le support.</span>
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
