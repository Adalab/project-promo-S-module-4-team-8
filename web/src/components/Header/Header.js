import { Link } from 'react-router-dom';
import logoProject from "../../images/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/" className='header__link'>
        <img src={logoProject} alt="logo de proyecto" className='header__image'></img>
      </Link>
    </header>
  );
}

export default Header;
