function Login(props) {
  const changeState = () => {
    console.log(props);
    props.propFunc(false);
  };

  return (
    <>
      <ul>
        <li className="profile-img">
          <a href="#">
            <img src="/Refactoring-blog/assets/profile.jpg" alt="My Page" />
          </a>
        </li>
        <li>
          <a href="#" className="button">
            <img
              src={require(`../../assets/icon-modify-white.svg`).default}
              alt=""
            />
            <span>Write</span>
          </a>
        </li>
        <li>
          <button className="button white" onClick={changeState}>
            <img src={require(`../../assets/icon-logout.svg`).default} alt="" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Login;
