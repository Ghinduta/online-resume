import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faAnchor,
  faAddressBook,
  faGlobe,
  faProjectDiagram,
  faMicroscope,
  faMotorcycle,
  faRobot,
  faLaptopCode,        // for Web Design
  faChartLine,         // for SEO Marketing
  faMobileAlt          // for Mobile App
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      icon: faMotorcycle,
      title: "Computer Science",
      uni: "Babeș-Bolyai University",
      level: "Bachelor's degree",
      interval: "2016-2019",
      label: "On-campus"
    },
    {
      icon: faMicroscope,
      title: "Software Engineering",
      uni: "Babeș-Bolyai University",
      level: "Master's degree",
      interval: "2016-2019",
      label: "On-campus"
    },
    {
      icon: faLaptopCode,
      title: "Web Design",
      label: "Online"
    },
    {
      icon: faChartLine,
      title: "SEO Marketing",
      label: "Online"
    },
    {
      icon: faMobileAlt,
      title: "Mobile App",
      label: "Online"
    },
  ];

  return (
    <section id="education" className="arlo_tm_section">
      <div className="arlo_tm_services">
        <div className="container">
          <div className="arlo_tm_main_title">
            <span>Education</span>
            <h3>Where and what I studied</h3>
          </div>
          <div className="service_list">
            <ul>
              {services.map((service, idx) => (
                <li key={idx}>
                  <div className="list_inner">
                    <div className="in">
                      <span className="icon">
                        <FontAwesomeIcon icon={service.icon} size="lg" className="svg" />
                      </span>
                      <h3 className="title">{service.title}</h3>

                      {service.uni && <p className="text"><strong>{service.uni}</strong></p>}
                      {service.level && <p className="text">{service.level}</p>}
                      {service.interval && <p className="text">{service.interval}</p>}
                      {service.label && (
  <span className={`label ${service.label === "Online" ? "online" : "on-campus"}`}>
    {service.label}
  </span>
)}
                    </div>
                    <a className="arlo_tm_full_link" href="#"></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
