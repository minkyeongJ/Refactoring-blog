import * as S from './Style'

function Author({props}) {
  return (
    <S.AuthorWrap>
      <dt className="a11y-hidden">Author</dt>
      <dd>
        <S.AuthorImg src={props.postProfileImg} alt="" /> {props.postUserName}
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <S.Created>{props.postCreated}</S.Created>
    </S.AuthorWrap>
  );}

export default Author;