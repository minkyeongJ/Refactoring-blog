import './css/Banner.css';

function PostBanner(){
  return (
    <div className="banner" style={{backgroundImage: "url(assets/post-background6.jpg)"}}>
			<div className="max-width">
				<div className="banner-contents">
					<p className="today">May <em>25</em> Wednesday</p>
				</div>
			</div>
		</div>
  )
}

export default PostBanner;
