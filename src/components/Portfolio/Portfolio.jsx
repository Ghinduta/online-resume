import React from "react";
import thumb1 from '../../assets/thumbs/1-1.jpg';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const portfolioItems = [
  {
    title: "Exotrail House",
    category: "Youtube",
    filterClass: "youtube",
    thumb: thumb1,
    image: img2,
    link: "https://www.youtube.com/watch?v=7e90gBu4pas",
    type: "popup-youtube",
  },
  {
    title: "So Skilled",
    category: "Vimeo",
    filterClass: "vimeo",
    thumb: thumb1,
    image: img1,
    link: "https://vimeo.com/337293658",
    type: "popup-vimeo",
  },
  {
    title: "Cashdash Pro",
    category: "Soundcloud",
    filterClass: "soundcloud",
    thumb: thumb1,
    image: img3,
    link: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807",
    type: "soundcloude_link mfp-iframe audio",
  },
  {
    title: "The Techouse",
    category: "Popup",
    filterClass: "popup",
    thumb: thumb1,
    image: img5,
    link: img5,
    type: "zoom",
  },
  {
    title: "Seat Geek",
    category: "Popup",
    filterClass: "popup",
    thumb: thumb1,
    image: img4,
    link: img4,
    type: "zoom",
  },
  {
    title: "Eco Krypton",
    category: "Content",
    filterClass: "content",
    thumb: thumb1,
    image: img6,
    link: "#",
    type: "portfolio_popup",
  },
];


const Portfolio = () => (
  <div className="arlo_tm_section" id="work experience">
    <div className="arlo_tm_portfolio">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Works</span>
          <h3>Creative Portfolio</h3>
        </div>

        <div className="portfolio_filter">
          <ul>
            <li><a href="#" className="current" data-filter="*">All</a></li>
            <li><a href="#" data-filter=".youtube">Youtube</a></li>
            <li><a href="#" data-filter=".vimeo">Vimeo</a></li>
            <li><a href="#" data-filter=".soundcloud">Soundcloud</a></li>
            <li><a href="#" data-filter=".popup">Popup</a></li>
            <li><a href="#" data-filter=".content">Content</a></li>
          </ul>
        </div>

        <div className="portfolio_list">
          <ul className="gallery_zoom">
            {portfolioItems.map((item, index) => (
              <li className={item.filterClass} key={index}>
                <div className="list_inner">
                  <div className="image">
                    <img src={item.thumb} alt={item.title} />
                    <div className="main" data-img-url={item.image}></div>
                  </div>
                  <div className="overlay"></div>
                  <div className="details">
                    <h3>{item.title}</h3>
                    <span>{item.category}</span>
                  </div>
                  <a className={`arlo_tm_full_link ${item.type}`} href={item.link}></a>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  </div>
);

export default Portfolio;
