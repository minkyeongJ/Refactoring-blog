import styled from "styled-components";

const AuthorStyle = styled.dl`
  display: flex;
  gap: 1rem;
  color: #767676;
  font-size: 1.2rem;
  dd {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;

export const AuthorWrap = styled(AuthorStyle)`
  height: 6.4rem;
  font-size: 1.4rem;
  @media (max-width: 1024px) {
    height: 5.2rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 640px) {
    margin-bottom: 1rem;
    padding-left: 3rem;
  }
`;

export const AuthorImg = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

export const Created = styled.dd`
  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`;
