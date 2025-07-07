import React from "react";
import aboutBg from './images/ana.jpg';

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
        {['home', 'intro', 'education', 'work experience', 'side projects', 'contact'].map((id) => (
          <li key={id}>
            <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
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