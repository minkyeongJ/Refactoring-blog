# React Blog

## 현재 브랜치 셋팅 정보

1. `npx create-react-app ./` : 해당 폴더에 React 설치
2. 불필요한 파일 삭제 / 필요한 이미지 파일 및 더미 데이터 셋팅

## React 실습하기

- 기존 HTML/CSS 파일을 이용하여 React 작업을 해보세요.

1. 컴포넌트 만들기
2. Router를 사용하여 페이지 라우팅 처리하기
3. state 처리를 통해 header 버튼 바꾸기
  - logout<br />
  ![logout](https://user-images.githubusercontent.com/54294796/173001212-e5bb171e-f9e7-4816-b96b-ef7e8bd39289.jpg)
  - login<br />
  ![login](https://user-images.githubusercontent.com/54294796/173001206-bf815686-0020-4976-bf6a-76277122f7f2.jpg)
4. 더미 데이터를 가져와 게시글, 블로그 정보, 유저정보 뿌려주기

# 사용한 방법들
1. 이미지 경로 찾기
- ```<img src={require('./src_assets/logo192.png').default}/>```
- public 폴더안에 폴더를 만들고 이미지 파일 넣은 후 경로 작성하기
2. 날짜 문자로 나타내기
- https://mizzo-dev.tistory.com/entry/JavaScript%EB%82%A0%EC%A7%9C-Date-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9A%94%EC%9D%BC-%EA%B5%AC%ED%95%98%EA%B8%B0
# 이슈
- profile-img가 ```{require().default}```로 작성하면 동작하지 않음
- json data 사용하기
  - https://velog.io/@yyeonjju/TIL-React-%EC%95%84%EC%A3%BC-%EC%89%BD%EA%B2%8C-%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-Mock-Data-%ED%99%9C%EC%9A%A9%EB%B2%95
- TypeError: Cannot read property 'map' of undefined
  - ```data.posts.map()``` => ```data.posts && data.posts.map()```
- props 받을 때 {} 하기
- 페이지 주소만 바뀌고 페이지 이동이 안될 때
  - X https://goddaehee.tistory.com/m/305 
  - O https://velog.io/@jzizsuuz/React-React-Router-Dom-Link-%ED%81%B4%EB%A6%AD-%EC%8B%9C-%EC%9D%B4%EB%8F%99-%EC%9D%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%98%A4%EB%A5%98 
    - index.js의 ```<React.StrictMode/>```를 제거해주니 해결
    - [Strict 모드 공식문서](https://ko.reactjs.org/docs/strict-mode.html)
- map오류
  - [&& 사용하기](https://velog.io/@dum6894/%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0-TypeError-Cannot-read-property-map-of-undefined)
- Link로 데이터 보내기
  - [React Router v6 튜토리얼](https://velog.io/@velopert/react-router-v6-tutorial)
  - [리액트 라우터 정리1](https://velog.io/@gytlr01/react-router-%EC%A0%95%EB%A6%AC)
  - [리액트 라우터 정리2](https://ventos06.tistory.com/7)
  - [리액트 라우터 정리3](https://gongbu-ing.tistory.com/44)
  - [Link로 props 보내기](https://velog.io/@sham/Router-Props-link%EB%A1%9C-%EC%A0%84%EB%8B%AC%ED%95%98%EB%8A%94-props)
- 게시물 역순으로 출력하기
  - ```data.posts.slice(0).reverse().map()```
  - 얕은 복사로 원본 배열을 건드리지 않고 역순으로 출력하기