import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowLeftBlue from "../../assets/ArrowLeft-blue.svg";

const WrapBox = styled.section`
  position: relative;
  width: 60rem;
  max-width: calc(100% - 4rem);
  margin: -22rem auto 0;
  padding: 8rem 0;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 4rem;
  transition: all 0.3s;
  h2 {
    margin-bottom: 4.8rem;
    font-size: 3.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 2.4rem;
    li:not(:first-child) {
      margin-top: 4rem;
    }
  }
  hr {
    border: 1px solid var(--border-color);
    border-width: 1px 0 0 0;
    margin: 3.2rem 0;
  }
  @media (max-width: 1024px) {
    margin-top: -35rem;
  }
`;

const ViewWriteWrapBox = styled(WrapBox)`
  width: 91.2rem;
  max-width: 100%;
  margin: -30rem 0 auto auto;
  padding: 8rem;
  @media (max-width: 1024px) {
    padding: 6rem;
  }
  @media (max-width: 640px) {
    padding: 4rem;
  }
`;

export const ViewWrap = styled(ViewWriteWrapBox)`
  h2 {
    margin-bottom: 0;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const WarpInner = styled.div`
  width: 39.2rem;
  max-width: calc(100% - 8rem);
  margin: 0 auto;
  font-size: 1.6rem;
`;

export const ViewWrapInner = styled(WarpInner)`
  width: 100%;
  max-width: 100%;
`;

export const WrapButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  top: 9.2rem;
  right: 8rem;
  font-size: 1.6rem;
  @media (max-width: 1024px) {
    top: 6rem;
    right: 6rem;
    height: 5.2rem;
  }
  @media (max-width: 640px) {
    top: 4rem;
    right: 4rem;
  }
`;

/* view */
export const ViewContents = styled.div`
  img {
    max-width: 100%;
    margin: 3.2rem 0;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: justify;
    letter-spacing: -0.01em;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  h2 {
    width: 100%;
    text-transform: none;
    font-size: 3.2rem;
    font-weight: bold;
  }
  button {
    flex-shrink: 0;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ButtonBack = styled(Link)`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  background: var(--gray-background) url(${ArrowLeftBlue}) no-repeat 50% 50% / 4rem;
  font-size: 1.6rem;
  position: absolute;
  top: 8rem;
  left: 0;
  @media (max-width: 1024px) {
    top: 6rem;
    width: 5.2rem;
    height: 5.2rem;
  }
  @media (max-width: 640px) {
    top: 4rem;
  }
`;

export const Category = styled.dl`
  margin: 2rem 0 1rem 0;
`;
