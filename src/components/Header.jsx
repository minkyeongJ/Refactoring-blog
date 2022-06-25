import { Link } from 'react-router-dom';
import './css/Header.css'
import './css/Profile.css'
import Login from './Login'
import Logout  from './Logout';

function Header() {
	return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to={'/'}>
              <img src={require(`../assets/Logo.svg`).default} alt="My Blog" />
            </Link>
          </h1>
          <Login />
          {/* <Logout /> */}
        </div>
      </header>
    </>
  );
}

export default Header;
