import { useEffect, useState } from 'react';
import './css/Banner.css';

function MainBanner(){
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Refactoring-blog/data.json", {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const bannerData = data && data.blog;
  const mainTitle = bannerData && bannerData.mainTitle;
  const subTitle = bannerData && bannerData.subTitle;
  const description = bannerData && bannerData.description;

  return (
    <div className="banner">
			<div className="max-width">
				<div className="banner-contents">
					<p className="sub-text">{subTitle}</p>
					<p className="main-text">{mainTitle}</p>
					<p className="description">
						{description}
					</p>
				</div>
			</div>
		</div>
  )
}

export default MainBanner;
