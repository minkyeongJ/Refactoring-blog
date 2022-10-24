import styled from "styled-components"

export const WrapBox = styled.section`
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
`
export const WarpInner = styled.div`
	width: 39.2rem;
	max-width: calc(100% - 8rem);
	margin: 0 auto;
	font-size: 1.6rem;
`

/* view, write */
export const ViewWriteWrapBox = styled(WrapBox)`
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
`
export const MypageWrap = styled(ViewWriteWrapBox)``
export const ViewWrap = styled(ViewWriteWrapBox)`
  @media (max-width: 1024px) {
		width: 100%;
  }
`
export const WriteWrap = styled(ViewWriteWrapBox)`
  @media (max-width: 1024px) {
		width: 100%;
  }
`

const ViewWriteInner = styled.div`
  width: 100%;
	max-width: 100%;
`
export const ViewInner = styled(ViewWriteInner)``;
export const WriteInner = styled(ViewWriteInner)``;

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

