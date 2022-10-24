import styled from "styled-components";

export const PostStyle = styled.a`
  display: block;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 2rem;

  article > img {
    width: 100%;
  }

  .contents-wrap {
    padding: 1.6rem 2.4rem 2.4rem;

    h3,
    .post-description {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    h3 {
      height: calc(1.8rem * 1.4 * 2);
      margin: 1rem 0;
      font-size: 1.8rem;
      font-weight: bold;
      -webkit-line-clamp: 2;
      letter-spacing: -0.02em;
    }

    .post-description {
      height: calc(1.4rem * 1.4 * 3);
      margin-top: 1.6rem;
      color: var(--gray-color);
      font-size: 1.4rem;
      -webkit-line-clamp: 3;
      text-indent: 0.5em;
    }
  }

  @media (max-width: 540px) {
    .contents-wrap h3 {
      height: auto;
      -webkit-line-clamp: 1;
    }
    .contents-wrap .post-description {
      height: auto;
      -webkit-line-clamp: 2;
    }
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }

  @media (max-width: 768px) {
    .posts {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .posts {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
