import logo from '../../assets/logo.png';
import './header.css';

function Header() {
  return (
    <header className="header">
        <nav  className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <ul  className="menu">
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>

        </nav>
    </header>
  );
}

export default Header;
