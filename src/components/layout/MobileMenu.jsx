import React from "react";

const MobileMenu = () => (
  <div className="arlo_tm_mobile_menu">
    <div className="mobile_menu_inner">
      <div className="mobile_in">
        <div className="logo" data-type="avatar">
          <div className="avatar" style={{ backgroundImage: 'url(/img/about/2.jpg)' }}></div>
          <div className="image">
            <img src="/img/logo/logo.png" alt="" />
          </div>
          <div className="text">
            <h3>ARLO</h3>
          </div>
        </div>
        <div className="trigger">
          <div className="hamburger hamburger--slider">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown">
      <div className="dropdown_inner">
        <ul className="anchor_nav">
          {['home', 'about', 'service', 'portfolio', 'news', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default MobileMenu;