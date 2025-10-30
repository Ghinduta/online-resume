import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="arlo_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo" data-type="avatar">
            <div
              className="avatar"
              style={{ backgroundImage: "url(/img/about/2.jpg)" }}
            ></div>
            <div className="image">
              <img src="/img/logo/logo.png" alt="" />
            </div>
            <div className="text">
              <h3>ARLO</h3>
            </div>
          </div>
          <div className="trigger" onClick={toggleMenu}>
            <div
              className={`hamburger hamburger--slider ${
                isOpen ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="dropdown"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            {[
              { id: 'home', label: 'Hello world!' },
              { id: 'skills', label: 'Skills' },
              { id: 'work experience', label: 'Work experience' },
              { id: 'education', label: 'Education' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
