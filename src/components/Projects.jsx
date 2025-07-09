import React from "react";

const newsItems = [
  {
    date: "2025",
    category: "Build React app | Web",
    title: "Online invitation",
    link: "https://ghinduta.github.io/family-invite-2/#",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/1.jpg",
  },
  {
    date: "2025",
    category: "Family Projects | Web",
    title: "Parenting millestones",
    link:"https://rad-gumdrop-9ab237.netlify.app/",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/2.jpg",
  },
  {
    date: "Oct 20, 2024",
    category: "Learn modern React Course",
    link:"https://coruscating-begonia-7585b0.netlify.app/",
    category_link: "https://www.udemy.com/course/react-front-to-back-2022/",
    title: "Building a feedback app",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/3.jpg",
  },
  {
    date: "2025",
    category: "Build React app | Web",
    link:"https://online-resume-ana.netlify.app/",
    title: "Building my own resume",
    thumb: "img/thumbs/4-3.jpg",
    image: "img/news/3.jpg",
  }
];

const News = () => (
  <div className="arlo_tm_section" id="side projects">
    <div className="arlo_tm_news">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Blog</span>
          <h3>Personal Projects</h3>
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
                        <p>
                      {item.date} in {' '}
                      {item.category_link ? (
                        <a
                          className="line_effect clickable"
                          href={item.category_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.category}
                        </a>
                      ) : (
                        <i className="em_color">{item.category}</i>
                      )}
                    </p>
                    </div>
                    <h3 className="title">
                      <a className="line_effect_2" href={item.link} target="_blank">{item.title}</a>
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
