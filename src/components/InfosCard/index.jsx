import './infoscard.css';

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

export default InfosCard;