1. HTML/CSS 블로그 구조
- assets/ : 파비콘, 아이콘 등
- images/ : 이미지 등

```
│  README.md
├── index.html
├── post-view.html
├── assets
├── css
│    ├── about.css
│    ├── author.css
│    ├── banner.css
│    ├── button.css
│    ├── category.css
│    ├── footer.css
│    ├── global.css
│    ├── header.css
│    ├── main.css
│    ├── post.css
│    ├── posts.css
│    ├── profile.css
│    ├── reset.css
│    ├── veiw.css
│    └── wrapbox.css
└── images
```
1.2 index.html 구조
```
── index.html
    ├── <head/>
    │    ├── reset.css
    │    ├── font
    │    ├── layout
    │    └── component
    └── <body/>
         ├── <header/>
         │    ├── <로그인/>
         │    └── <로그아웃/>
         ├── <banner/>
         ├── <main/>
         │    ├── <posts/>
         │    │    ├── <category/>
         │    │    ├── <author/>
         │    │    └── <post-description/>
         │    └── <about/>
         └── <footer/>
    
```