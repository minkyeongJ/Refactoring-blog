import { useEffect, useState } from "react";
import * as S from './Style'
import mainBg from "../../assets/background.jpg";

function Banner({postId}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://minkyeongj.github.io//Refactoring-blog/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //MainBanner
  const bannerData = data && data.blog;
  const mainTitle = bannerData && bannerData.mainTitle;
  const subTitle = bannerData && bannerData.subTitle;
  const description = bannerData && bannerData.description;

  //PostBanner
  const postDatas = data.posts && data.posts[postId - 1];
  const postMainBg = postDatas && postDatas.mainBg;
  console.log(postMainBg);
  const postDay = postDatas && postDatas.created;
  const postDayArr = postDay && postDay.split(".");
  const year = postDayArr && postDayArr[0];
  const month = postDayArr && postDayArr[1];
  const day = postDayArr && postDayArr[2];

  const monthList = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayOfWeekList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saterday",
  ];

  let dateStr = new Date(year, month - 1, day).toString();
  const dateStrArr = dateStr && dateStr.split(" ");
  const monthStr = monthList.filter(
    (month) => dateStrArr[1] === month.slice(0, 3)
  );
  const dayOfWeekStr = dayOfWeekList.filter(
    (dayOfWeek) => dateStrArr[0] === dayOfWeek.slice(0, 3)
  );

  console.log(postId);
  return (
    <>
      {!postId ? (
        <S.BannerStyle className="banner" bgImg={mainBg}>
          <div className="max-width">
            <div className="banner-contents">
              <p className="sub-text">{subTitle}</p>
              <p className="main-text">{mainTitle}</p>
              <p className="description">{description}</p>
            </div>
          </div>
        </S.BannerStyle>
      ) : (
        <S.BannerStyle bgImg={postMainBg}>
          <div className="max-width">
            <div className="banner-contents">
              <p className="today">
                {monthStr} <em>{day}</em> {dayOfWeekStr}
              </p>
            </div>
          </div>
        </S.BannerStyle>
      )}
    </>
  );
}

export default Banner;
