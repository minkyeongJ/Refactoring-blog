import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './css/Banner.css';

function PostBanner(){

  const postId = useParams().id;

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

  const postDatas = data.posts && data.posts[postId-1];
  const postMainBg = postDatas && postDatas.mainBg;

  //요일구하기
  // let day = new Date(2016, a-1, b);
  // const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saterday'];
  // let week = WEEKDAY[day.getDay()];
  const postDay = postDatas && postDatas.created;
  const postDayArr = postDay && postDay.split('.');
  const year = postDayArr && postDayArr[0];
  const month = postDayArr && postDayArr[1];
  const day = postDayArr && postDayArr[2];

  const monthList = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayOfWeekList = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saterday'];

  let dateStr = new Date(year, month, day).toString();
  const dateStrArr = dateStr && dateStr.split(' ');
  const monthStr = monthList.filter(month => dateStrArr[1] === month.slice(0, 3));
  const dayOfWeekStr = dayOfWeekList.filter(dayOfWeek => dateStrArr[0]=== dayOfWeek.slice(0, 3));

  console.log(dateStrArr[1]);
  console.log(monthStr);

  return (
    <div className="banner" style={{backgroundImage: `url(${postMainBg})`}}>
			<div className="max-width">
				<div className="banner-contents">
					<p className="today">{monthStr} <em>{day}</em> {dayOfWeekStr}</p>
				</div>
			</div>
		</div>
  )
}

export default PostBanner;
