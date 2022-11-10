import './infoscard.css';
import PropTypes from 'prop-types'

function InfosCard({name, infos, icon}) {

  return (
    <aside className="infos-card">
        <div className='infos-card_icon'>
        <img src={icon} className="infos-icon" alt="{name}" />
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
  sicon: PropTypes.string,
}

export default InfosCard;