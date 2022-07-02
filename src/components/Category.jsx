import styled from "styled-components";

function Category(props) {
  return (
    <CategoryStyle className="category">
      <dt className="a11y-hidden">Category</dt>
      {props.postCategory.map((category) => (
        <dd>{category}</dd>
      ))}
    </CategoryStyle>
  );
}

const CategoryStyle = styled.dl`
	display: flex;
	flex-wrap: wrap;
	color: var(--main-color);
  
  dd {
    margin-right: 0.4rem;
    padding: 0.2rem 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    background: var(--gray-background);
    font-size: 1.2rem;
  }

`

export default Category;