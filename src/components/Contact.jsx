import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const contactDetails = [
  {
    icon: faLocationDot,
    label: "Address:",
    content: <h3>Cluj-Napoca, Romania</h3>,
  },
  {
    icon: faEnvelope,
    label: "Mail:",
    content: (
      <h3>
        <a className="line_effect" href="mailto:ana.ghindariu@gmail.com">
          ana.ghindariu@gmail.com
        </a>
      </h3>
    ),
  },
  {
    icon: faLinkedin,
    label: "Social:",
    content: (
      <ul className="social">
        <li>
          <h3>
            <a
              className="line_effect"
              href="https://www.linkedin.com/in/ghindariu-ana-821a22137/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> In.
            </a>
          </h3>
        </li>
      </ul>
    ),
  },
];


const Contact = () => (
  <div className="arlo_tm_section" id="contact">
    <div className="arlo_tm_contact">
      <div className="container">
        <div className="arlo_tm_main_title">
          <span>Contact</span>
          <h3>Get in Touch</h3>
        </div>
        <div className="inner">
          <div className="left">
            <ul>
              {contactDetails.map((item, index) => (
                <li key={index}>
                  <div className="list_inner">
                    <span className="icon">
                       <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <div className="info">
                      <span>{item.label}</span>
                      {item.content}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
