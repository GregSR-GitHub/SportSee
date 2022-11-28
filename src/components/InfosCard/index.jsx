/**
 * Display user infos datas
 * @param { String } name
 * @param { String } infos
 * @return { HTMLElement }
 */

import './infoscard.css';
import calories_icon from '../../assets/calories-icon.png';
import carbs_icon from '../../assets/carbs-icon.png';
import protein_icon from '../../assets/protein-icon.png';
import fat_icon from '../../assets/fat-icon.png';
import PropTypes from 'prop-types'

function InfosCard({name, infos}) {

  const iconByType = {Calories: calories_icon, Proteïne: protein_icon, Glucides: carbs_icon, Lipides: fat_icon}

  return (
    <aside className="infos-card">
        <div className='infos-card_icon'>
        <img src={iconByType[name]} className="infos-icon" alt="{name}" />
        </div>
        <div className='infos-card_text'>
            <span  className='infos-card_infos'>{infos}</span>
            <span  className='infos-card_name'>{name}</span>
        </div>
    </aside>
  );
}

InfosCard.propTypes = {
  name: PropTypes.string,
  infos: PropTypes.string,
}

export default InfosCard;