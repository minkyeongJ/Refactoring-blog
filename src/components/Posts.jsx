import React from "react";
import './css/Author.css'

function Posts(){
  return (
    <>
    <li>
      <a href="post-view.html" className="post">
        <article>
          {/* <img src={require('../images/post-img6.jpg').default} alt="" /> */}
          <img src='assets/post-img6.jpg' alt="" />
          <div className="contents-wrap">
            {/* <!-- category --> */}
            <dl className="category">
              <dt className="a11y-hidden">Category</dt>
              <dd>Life</dd>
              <dd>Style</dd>
            </dl>
            {/* <!-- //category --> */}

            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>

            {/* <!-- author --> */}
            <dl className="author-wrap">
              <dt className="a11y-hidden">Author</dt>
              <dd className="author"><img src='assets/profile.jpg' alt="" /> Chilli</dd>
              <dt className="a11y-hidden">Created</dt>
              <dd className="created">2022.05.25</dd>
            </dl>
            {/* <!-- //author --> */}

            <p className="post-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
              facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta
              corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
              illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis
              dolor quas odio cum incidunt repudiandae vel."
            </p>
          </div>
        </article>
      </a>
    </li>
    </>
  );
};

export default Posts;