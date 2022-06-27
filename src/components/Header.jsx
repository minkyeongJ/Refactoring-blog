import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'
import './css/Profile.css'
import Login from './Login'
import Logout  from './Logout';

function Header() {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/Refactoring-blog/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const userData = data.users;

  console.log(userData);

  //버튼 동작 틀
  const handleLoginClick = () => {
    setIsLogin(true);
  }

  const handleLogoutClick = () => {
    setIsLogin(false);
  }

	return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to={'/'}>
              <img src={require(`../assets/Logo.svg`).default} alt="My Blog" />
            </Link>
          </h1>
          {isLogin ? <Login /> : <Logout />}
        </div>
      </header>
    </>
  );
}

export default Header;
