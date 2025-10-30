import React from "react";
import aboutBg from '../../../assets/images/acorn.jpg';

const Sidebar = () => (
  <aside className="arlo_tm_sidebar">
    <div className="logo" data-type="avatar">
      <div className="avatar" style={{ backgroundImage: `url(${aboutBg})` }}></div>
      <div className="image">
        <img src="/img/logo/logo.png" alt="logo" />
      </div>
      <div className="text">
        <h3>ARLO</h3>
      </div>
    </div>
    <nav className="menu scrollable">
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
    </nav>
    <div className="copyright">
      <p>
        &copy; 2025 by Ana
      </p>
    </div>
  </aside>
);

export default Sidebar;