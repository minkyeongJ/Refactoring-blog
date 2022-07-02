import styled from "styled-components";

function Author({props}) {
  return(
    <AuthorStyle className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author"><img src={props.postProfileImg} alt="" /> {props.postUserName}</dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">{props.postCreated}</dd>
    </AuthorStyle>
)}

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
  .author img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
  .created::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`;

export default Author;