import React from "react";

const newsItems = [
  {
    date: "2015",
    sortDate: "2015-06-01",
    category: "Research Projects",
    title: "Bachelor's thesis",
    link: "https://drive.google.com/file/d/1iwnmS3eBCoeLfJlNCFY8upSSXVLJYJzL/view",
  },
  {
    date: "2019",
    sortDate: "2019-09-01",
    category: "Research Projects",
    title: "Master's thesis",
    link: "https://drive.google.com/file/d/15db9vlwC6bNzFw7Uhmo8c7DFs6env1wf/view",
  },
  {
    date: "2025",
    sortDate: "2025-01-01",
    category: "Family Projects | Web",
    title: "Online invitation",
    link: "https://ghinduta.github.io/family-invite-2/#",
  },
  {
    date: "2025",
    sortDate: "2025-01-15",
    category: "Family Projects | Web & Mobile",
    title: "Parenting millestones",
    link:"https://parentpace.org/",
  },
  {
    date: "...",
    sortDate: "2012-10-20",
    category: "Others",
    link:"https://github.com/Ghinduta",
    title: "See more on Github",
  }
].sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));

const News = () => (
  <div className="arlo_tm_section" id="portfolio">
    <div className="arlo_tm_news">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Portfolio</span>
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
