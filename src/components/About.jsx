import styled from 'styled-components';
import './css/Category.css';

function About(){
  return (
    <AboutStyle>
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
            <img src={require("../assets/Facebook.svg").default} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../assets/Twitter.svg").default} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../assets/Instagram.svg").default} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={require("../assets/Github.svg").default} alt="GitHub" />
          </a>
        </li>
      </ul>
    </AboutStyle>
  );
};

const AboutStyle = styled.aside`
  flex-basis: calc((100% - 2.4rem * 3) / 4);
  flex-shrink: 0;
  align-self: flex-start;
  padding: 4rem 2.4rem 7rem;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  background: var(--white-color);
  text-align: center;
  font-size: 2rem;

  h2, h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 0.1em;
  }

  h3 {
    margin-top: 6rem;
  }

  .user-profile {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .user-name {
    color: var(--main-color);
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1.2rem 0 0.8rem;
  }

  .user-description {
    font-size: 1.4rem;
    padding: 0 0.4rem;
  }
  
  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    li a {
      background: var(--gray-background);
      color: var(--gray-text);
      font-size: 1.2rem;
      border-radius: calc(var(--border-radius) * 2);
      padding: 0.2rem 1.2rem;
    }
  }
  
  .sns {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    margin-top: -0.4rem;

    a {
      display: block;
      padding: 0.4rem;
      line-height: 1;
    }

    img {
      width: 1.6rem;
      display: block;
    }
  }

  @media (max-width: 1024px) {
      width: 100%;
  }
`

export default About;