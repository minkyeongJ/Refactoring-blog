import * as S from './Style'

function Category(props) {
  return (
    <S.CategoryStyle className="category">
      <dt className="a11y-hidden">Category</dt>
      {props.postCategory.map((category) => (
        <dd>{category}</dd>
      ))}
    </S.CategoryStyle>
  );
}

export default Category;