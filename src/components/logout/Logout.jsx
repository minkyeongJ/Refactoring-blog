import React from "react";

function Logout(props) {
  const changeState = () => {
    console.log(props);
    props.propFunc(true);
  };

  return (
    <>
      <ul>
        <li>
          <a href="#" className="button gray" onClick={changeState}>
            <img src={require("../../assets/icon-login.svg").default} alt="" />
            <span>Login</span>
          </a>
        </li>
        <li className="only-pc">
          <a href="#" className="button gray" onClick={changeState}>
            <img src={require("../../assets/icon-register.svg").default} alt="" />
            <span>Register</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Logout;
