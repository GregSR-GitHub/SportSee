import icon_meditate from '../../assets/icon_meditate.png';
import icon_bike from '../../assets/icon_bike.png';
import icon_swim from '../../assets/icon_swim.png';
import icon_fitness from '../../assets/icon_fitness.png';
import './sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
        <ul  className="side-menu">
            <li><img src={icon_meditate} className="icon" alt="logo" /></li>
            <li><img src={icon_swim} className="icon" alt="logo" /></li>
            <li><img src={icon_bike} className="icon" alt="logo" /></li>
            <li><img src={icon_fitness} className="icon" alt="logo" /></li>
        </ul>
        <span className="copyright">Copiryght, SportSee 2020</span>
    </nav>
  );
}

export default Sidebar;