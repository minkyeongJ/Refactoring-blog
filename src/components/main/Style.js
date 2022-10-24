import styled from "styled-components";

export const MainStyle = styled.main`
  & > .max-width {
    display: flex;
    flex-direction: row-reverse;
    gap: 2.4rem;
    position: relative;
  }
  @media (max-width: 1024px) {
    .max-width {
      flex-direction: column;
    }
  }
`;

export const PostsStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
