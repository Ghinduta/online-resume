import React from "react";

const newsItems = [
  {
    date: "Oct 26, 2024",
    category: "Design",
    title: "Building portfolio website with Vanilla",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/1.jpg",
  },
  {
    date: "Oct 22, 2024",
    category: "Design",
    title: "The guide to converting Angular apps",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/2.jpg",
  },
  {
    date: "Oct 20, 2024",
    category: "Design",
    title: "Building a tooltip react components",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/3.jpg",
  },
];

const News = () => (
  <div className="arlo_tm_section" id="side projects">
    <div className="arlo_tm_news">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Blog</span>
          <h3>Latest Posts</h3>
        </div>
        <div className="news_list">
          <ul>
            {newsItems.map((item, index) => (
              <li key={index}>
                <div className="list_inner">
                  <div className="image">
                    <img src={item.thumb} alt="" />
                    <div className="main" data-img-url={item.image}></div>
                    <a className="arlo_tm_full_link" href="#"></a>
                  </div>
                  <div className="details">
                    <div className="meta">
                      <p>{item.date} in <a className="line_effect" href="#">{item.category}</a></p>
                    </div>
                    <h3 className="title">
                      <a className="line_effect_2" href="#">{item.title}</a>
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default News;
