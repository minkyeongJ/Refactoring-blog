import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostView() {
  const postId = useParams().id;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const postDatas = data.posts && data.posts[postId-1];
  const postTitle = postDatas && postDatas.title;
  const postCategory = postDatas && postDatas.category;
  const postProfileImg = postDatas && postDatas.profileImg;
  const postUserName = postDatas && postDatas.userName;
  const postCreated = postDatas && postDatas.created;
  const postContents = postDatas && postDatas.contents;

  const $viewContents = document.querySelector(".view-contents");

  return (
    <div className="view">
			<div className="max-width">
				<section className="wrap-box">
					<div className="inner">
						{/* <!-- author --> */}
						<dl className="author-wrap">
							<dt className="a11y-hidden">Author</dt>
							<dd className="author"><img src={postProfileImg} alt="" /> {postUserName}</dd>
							<dt className="a11y-hidden">Created</dt>
							<dd className="created">{postCreated}</dd>
						</dl>
						{/* <!-- //author --> */}

						{/* <!-- category --> */}
						<dl className="category">
							<dt className="a11y-hidden">Category</dt>
							{postCategory && postCategory.map(category => (
                <dd>{category}</dd>
              ))}
						</dl>
						{/* <!-- //category --> */}
						<div className="title-wrap">
							<h2>{postTitle}</h2>
							<button className="btn-like">Like</button>
						</div>
						<hr />
						<div className="view-contents">
                {
                  postContents && postContents.map((data) => {
                    const postType = document.createElement(data.type);
                    if(data.type === 'p'){
                      postType.textContent = data.text;
                    }else if(data.type === 'img'){
                      postType.src = data.src;
                    }
                    $viewContents.append(postType);
                  })
                }
						</div>
						<div className="btn-group">
							<a href="#" className="btn-modify">
								<span className="a11y-hidden">modify</span>
							</a>
							<button type="button" className="btn-delete">
								<span className="a11y-hidden">delete</span>
							</button>
						</div>
						<a href="./" className="btn-back">
							<span className="a11y-hidden">Back</span>
						</a>
					</div>
				</section>
			</div>
		</div>
  );
}

export default PostView;