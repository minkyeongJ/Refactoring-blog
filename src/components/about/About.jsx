import { useState } from 'react';
import { useEffect } from 'react';
import * as S from './Style';

function About(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);
  
  const userDatas = data.users && data.users[0];
  const userCategory = userDatas && {type: 'main', datas: userDatas.category};

  return (
    <S.AboutStyle className="about">
      <h2>About Me</h2>
      <img src='/Refactoring-blog/assets/profile.jpg' alt="" className="user-profile" />
      <p className="user-name">Chilli</p>
      <p className="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <h3>Categories</h3>
      <ul className="categories">
        <li><a href="#">Life</a></li>
        <li><a href="#">Style</a></li>
        <li><a href="#">Tech</a></li>
        <li><a href="#">Sport</a></li>
        <li><a href="#">Photo</a></li>
        <li><a href="#">Develop</a></li>
        <li><a href="#">Music</a></li>
      </ul>
      <h3>Follow</h3>
      <ul className="sns">
        <li>
          <a href="#">
            <img src={require("../../assets/Facebook.svg").default} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../../assets/Twitter.svg").default} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../../assets/Instagram.svg").default} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../../assets/Github.svg").default} alt="GitHub" />
          </a>
        </li>
      </ul>
    </S.AboutStyle>
  );
};



export default About;