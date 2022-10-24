import styled from "styled-components";

export const BannerStyle = styled.div`
  position: relative;
  background: ${(props) => `url(${props.bgImg})`} no-repeat 50% 50% / cover;

  height: 27em;
  margin-bottom: -7em;

  .banner-contents {
    width: 28rem;
    padding: 7rem 0 14.5rem;
    text-align: center;
    color: var(--gray-background-light);

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: calc((100% - 1224px) / 2 + 44rem);
      height: 100%;
      background: rgba(40, 48, 63, 0.5);
    }

    & > * {
      position: relative;
    }

    .sub-text {
      border: 1px solid rgba(249, 249, 249, 0.3);
      border-width: 1px 0;
      padding: 1rem 0 0.8rem;
      font-size: 2rem;
      letter-spacing: 0.2em;
    }
  }

  .main-text {
    font-weight: bold;
    font-size: 5.4rem;
    margin: 1.6rem 0;
  }

  .description {
    font-size: 1.2rem;
    text-align: left;
    word-break: break-all;
    padding: 0 0.8rem;
  }

  .today {
    padding-left: 0.8em;
    font-size: 5rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.1;
  }
  .today em {
    display: block;
    font-size: 2em;
    margin-bottom: -0.15em;
  }

  /* 반응형 */
  @media (max-width: 1280px) {
    .banner-contents::before {
      width: 44rem;
    }
  }
  @media (max-width: 1260px) {
    .today {
      font-size: 3rem;
      padding-left: 0.2em;
    }
    .today em {
      display: inline;
      font-size: 1.4em;
    }
  }

  @media (max-width: 768px) {
    .banner-contents {
      width: 100%;
    }
    .banner-contents::before {
      width: 100%;
    }
    .banner-contents {
      margin: 0 auto;
    }

    .today {
      text-align: center;
      padding-left: 0;
    }
  }
`;
