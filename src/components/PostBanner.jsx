import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/Banner.css';

function PostBanner(){

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
  const postMainBg = postDatas && postDatas.mainBg;

  return (
    <div className="banner" style={{backgroundImage: `url(${postMainBg})`}}>
			<div className="max-width">
				<div className="banner-contents">
					<p className="today">May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
  )
}

export default PostBanner;
