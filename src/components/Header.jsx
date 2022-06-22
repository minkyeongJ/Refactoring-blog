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
            <a href="./">
              <img src={require(`../assets/Logo.svg`).default} alt="My Blog" />
            </a>
          </h1>
          <Login />
          {/* <Logout /> */}
        </div>
      </header>
    </>
  );
}

export default Header;
