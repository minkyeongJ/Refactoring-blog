import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: var(--white-color);

  .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    padding: 1rem 0;

    h1 {
      font-size: 3rem;
      a {
        display: block;
        padding: 0.4rem;
        margin-left: -0.4rem;
        img {
          display: block;
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .profile-img a {
      width: 4.4rem;
      height: 4.4rem;
      display: block;
      border-radius: 50%;
    }
    .profile-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .button {
      text-transform: none;
    }

    @media (max-width: 640px) {
      .only-pc {
        display: none;
      }
      .button {
        width: 4.4rem;
        height: 4.4rem;
        padding: 0;
        border-radius: 50%;
      }
      .button span {
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
      }
    }
  }
`;

export const ProfileStyle = styled.div`
  .profile-wrap {
    width: 12rem;
    height: 12rem;
    margin: 0 auto;
    position: relative;
  }

  .profile-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .btn-profile {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .btn-profile input[type="file"] {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .btn-profile label {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--main-color) url(../../../assets/icon-image.svg) no-repeat
      50% 50% / 2.4rem;
    position: absolute;
    cursor: pointer;
  }
`;
