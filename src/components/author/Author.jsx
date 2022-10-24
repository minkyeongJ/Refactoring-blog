import * as S from './Style'

function Author({props}) {
  return(
    <S.AuthorStyle className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author"><img src={props.postProfileImg} alt="" /> {props.postUserName}</dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">{props.postCreated}</dd>
    </S.AuthorStyle>
)}

export default Author;