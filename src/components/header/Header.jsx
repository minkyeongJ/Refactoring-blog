import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from './Style'
import Login from "../login/Login";
import Logout from "../logout/Logout";

function Header() {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const userData = data.users;

  console.log(userData);

  //버튼 동작
  const handleLoginState = (state) => {
    setIsLogin(state);
    console.log(state);
  };

  return (
    <>
      <S.HeaderStyle>
        <S.ProfileStyle className="max-width">
          <h1>
            <Link to={"/"}>
              <img src={require(`../../assets/Logo.svg`).default} alt="My Blog" />
            </Link>
          </h1>
          {isLogin ? (
            <Login propFunc={handleLoginState} />
          ) : (
            <Logout propFunc={handleLoginState} />
          )}
        </S.ProfileStyle>
      </S.HeaderStyle>
    </>
  );
}

export default Header;
