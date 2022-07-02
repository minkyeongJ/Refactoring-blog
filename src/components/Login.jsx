import React from "react";

function Login (){
  return (
    <>
      <ul>
        <li className="profile-img">
          <a href="#">
            <img src='assets/profile.jpg' alt="My Page" />
          </a>
        </li>
        <li>
          <a href="#" className="button">
            <img src={require(`../assets/icon-modify-white.svg`).default} alt="" />
            <span>Write</span>
          </a>
        </li>
        <li>
          <button className="button white">
            <img src={require(`../assets/icon-logout.svg`).default} alt="" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Login;