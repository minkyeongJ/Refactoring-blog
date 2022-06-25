import './css/Author.css'

function Posts({post}){
  const postId = post.id;
  const postImg = post.thumbnail;
  const postTitle = post.title;
  const postCategory = post.category;
  const postProfileImg = post.profileImg;
  const postUserName = post.userName;
  const postCreated = post.created;
  const postContents = post.contents;
  const postDescription = postContents[0].text;

  // const img = data.posts.postId;

  // const post
  console.log(postId);
  console.log(postContents);
  // console.log(data.posts.postId);
  return (
    <li>
      <a href="post-view.html" className="post">
        <article>
          <img src={postImg} alt="" />
          <div className="contents-wrap">
            {/* <!-- category --> */}
            <dl className="category">
              <dt className="a11y-hidden">Category</dt>
              {postCategory.map(category => (
                <dd>{category}</dd>
              ))}
            </dl>
            {/* <!-- //category --> */}

            <h3>{postTitle}</h3>

            {/* <!-- author --> */}
            <dl className="author-wrap">
              <dt className="a11y-hidden">Author</dt>
              <dd className="author"><img src={postProfileImg} alt="" /> {postUserName}</dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">{postCreated}</dd>
            </dl>
            {/* <!-- //author --> */}

            <p className="post-description">
              {postDescription}
            </p>
          </div>
        </article>
      </a>
    </li>
  );
};

export default Posts;