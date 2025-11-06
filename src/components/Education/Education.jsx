import React, { useState } from "react";
import DOMPurify from 'dompurify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faMicroscope,
  faMotorcycle,
  faLaptopCode,
  faChartLine,
  faMobileAlt,
  faBrain,
  faDna,
  faVials,
  faLeaf
} from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
  {
    icon: faLaptopCode,
    title: "Learn Data Analysis with Pandas",
    uni: "Codecademy",
    interval: "Issued Jan 2023",
    sortDate: "2023-01-01",
    label: "Online",
    certificateUrl: "https://www.codecademy.com/profiles/anaGhindariu9183074464/certificates/95dd3ed417d7d6c449afffc6401b310a",
    description: `<h6>Codecademy</h6> <i>Issued Jan 2023</i>
      <p>
      You can view the certificate <a href="https://www.codecademy.com/profiles/anaGhindariu9183074464/certificates/95dd3ed417d7d6c449afffc6401b310a" target="_blank" rel="noopener noreferrer">here</a>.
    </p>`
  },
  {
    icon: faMicroscope,
    title: "Software Engineering",
    uni: "Babeș-Bolyai University",
    level: "Master's degree",
    interval: "2016-2019",
    sortDate: "2019-09-01",
    label: "On-campus",
    certificateUrl: "https://drive.google.com/file/d/15db9vlwC6bNzFw7Uhmo8c7DFs6env1wf/view?usp=sharing",
    description: `
    <h6>Master's Thesis - Babeș-Bolyai University, Cluj-Napoca (September 2021)</h6>
    <p>
      Understanding genetically-encoded information plays a crucial role in addressing fundamental questions at the intersection of science and philosophy, such as the mechanisms of evolution, organismal responses to environmental stimuli, and the genetic basis of traits and diseases. Due to the complexity and diversity of cell types, organisms have evolved sophisticated regulatory systems involving temporal factors (cell differentiation and development stages), structural DNA packaging, and protein interactions, particularly transcription factors (TFs), which collectively govern gene expression.
    </p>
    <p>
      My thesis presents a data-centric approach to improving deep learning models for genomic prediction by focusing on transcription factor context specificity. This work develops a binary classifier that enhances high-confidence predictions of individual TFs by employing advanced data processing techniques such as slicing, masking, and subsampling. The study also compares multi-label versus single-label machine learning strategies and discusses how context-specific models can leverage features learned from collective models. Finally, the thesis reviews current advancements, limitations, and challenges in deep learning applications for genomics, offering insight into future research directions.
    </p>
    <p>
      You can view the full thesis <a href="https://drive.google.com/file/d/15db9vlwC6bNzFw7Uhmo8c7DFs6env1wf/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  `
  },
  {
    icon: faBrain,
    title: "Neural Networks and Deep Learning",
    uni: "Coursera",
    interval: "Issued Jun 2021",
    sortDate: "2021-06-01",
    label: "Online",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/9DF5AYDZ4YVK",
    description: `<h6>Coursera</h6> <i>Issued Jun 2021</i>
      <p>
      You can view the certificate <a href="https://www.coursera.org/account/accomplishments/verify/9DF5AYDZ4YVK" target="_blank" rel="noopener noreferrer">here</a>.
    </p>`
  },
  {
    icon: faVials,
    title: "Genome Sequencing (Bioinformatics II)",
    uni: "Coursera",
    interval: "Issued Aug 2020",
    sortDate: "2020-08-01",
    label: "Online",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/3G5FNVG7V5FD",
    description: `<h6>Coursera</h6> <i>Issued Aug 2020</i>
      <p>
      You can view the certificate <a href="https://www.coursera.org/account/accomplishments/verify/3G5FNVG7V5FD" target="_blank" rel="noopener noreferrer">here</a>.
    </p>`
  },
  {
    icon: faLeaf,
    title: "Introduction to Biology",
    uni: "MIT",
    interval: "Issued Nov 2019",
    sortDate: "2019-11-01",
    label: "Online",
    certificateUrl: "https://courses.edx.org/certificates/b1d2e031f1404475ba312b95dbc26a68",
    description: `<h6>Massachusetts Institute of Technology</h6> <i>Issued Nov 2019</i>
      <p>
      You can view the certificate <a href="https://courses.edx.org/certificates/b1d2e031f1404475ba312b95dbc26a68" target="_blank" rel="noopener noreferrer">here</a>.
    </p>`
  },
  {
    icon: faDna,
    title: "Finding Hidden Messages in DNA",
    uni: "Coursera",
    interval: "Issued Jul 2019",
    sortDate: "2019-07-01",
    label: "Online",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/DTJ88Q6B4QPP",
    description: `<h6>Coursera</h6> <i>Issued Jul 2019</i>
      <p>
      You can view the certificate <a href="https://www.coursera.org/account/accomplishments/verify/DTJ88Q6B4QPP" target="_blank" rel="noopener noreferrer">here</a>.
    </p>`
  },
  {
    icon: faChartLine,
    title: "Biology Meets Programming",
    uni: "Coursera",
    interval: "Issued Apr 2019",
    sortDate: "2019-04-01",
    label: "Online",
    certificateUrl: "https://www.coursera.org/account/accomplishments/verify/RQ4572J4S25B",
    description: `<h6>Coursera</h6> <i>Issued Apr 2019</i>
      <p>
      You can view the certificate <a href="https://www.coursera.org/account/accomplishments/verify/RQ4572J4S25B" target="_blank">here</a>.
    </p>`
  },
  {
    icon: faMotorcycle,
    title: "Computer Science",
    uni: "Babeș-Bolyai University",
    level: "Bachelor's degree",
    interval: "2012-2015",
    sortDate: "2015-06-01",
    label: "On-campus",
    certificateUrl: "https://drive.google.com/file/d/1iwnmS3eBCoeLfJlNCFY8upSSXVLJYJzL/view?usp=sharing",
    description: `
    <h6>Bachelor's Thesis - Babeș-Bolyai University, Cluj-Napoca (June 2019)</h6>
    <p>
      For my final thesis, I developed an Augmented Reality (AR) system tailored for motorcyclists to enhance road safety and accessibility during traffic navigation. The solution integrates real-time GPS localization, incoming call alerts, and vehicle motion tracking into a heads-up display mounted on the rider's helmet, allowing for minimal distraction and continuous focus on the road.
    </p>
    <p>
      Built on the Android platform, the application also records ride statistics such as average speed and frequently traveled routes, providing riders with meaningful feedback on their habits and performance. This project demonstrates the potential of AR and mobile technologies to improve real-world transportation safety through intuitive, user-centered design.
    </p>
    <p>
      You can view the full thesis <a href="https://drive.google.com/file/d/1iwnmS3eBCoeLfJlNCFY8upSSXVLJYJzL/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a>.
    </p>
  `
  }
];

const onCampusEducation = services.filter(s => s.label === "On-campus").sort(
  (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
);

const onlineEducation = services.filter(s => s.label === "Online").sort(
  (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
);

  return (
    <section id="education" className="arlo_tm_section">
      <div className="arlo_tm_services">
        <div className="container">
          <div className="arlo_tm_main_title">
            <span>Education</span>
          </div>

          {/* On-Campus Education */}
          <div className="education_category">
            <h4 className="education_category_title">On-Campus Education</h4>
            <div className="service_list">
              <ul>
                {onCampusEducation.map((service, idx) => (
                  <li key={idx}>
                    <div className="list_inner" onClick={() => {
                      console.log("Clicked service:", service);
                      setSelectedService(service);
                    }}>
                      <div className="in">
                        <span className="icon">
                          <FontAwesomeIcon icon={service.icon} size="lg" className="svg" />
                        </span>
                        <h3 className="title">{service.title}</h3>

                        {service.uni && <p className="text"><strong>{service.uni}</strong></p>}
                        {service.level && <p className="text">{service.level}</p>}
                        {service.interval && <p className="text">{service.interval}</p>}
                        {service.summary && <p className="text summary">{service.summary}</p>}
                        {service.label && (
                          <span className={`label ${service.label === "Online" ? "online" : "on-campus"}`}>
                            {service.label}
                          </span>
                        )}
                      </div>
                      <a className="arlo_tm_full_link" href="#" onClick={(e) => e.preventDefault()}></a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Online Education */}
          <div className="education_category">
            <h4 className="education_category_title">Online Courses & Certifications</h4>
            <div className="service_list">
              <ul>
                {onlineEducation.map((service, idx) => (
                <li key={idx}>
                  <div className="list_inner" onClick={() => {
                    console.log("Clicked service:", service);
                    setSelectedService(service);
                  }}>
                    <div className="in">
                      <span className="icon">
                        <FontAwesomeIcon icon={service.icon} size="lg" className="svg" />
                      </span>
                      <h3 className="title">{service.title}</h3>

                      {service.uni && <p className="text"><strong>{service.uni}</strong></p>}
                      {service.level && <p className="text">{service.level}</p>}
                      {service.interval && <p className="text">{service.interval}</p>}
                      {service.summary && <p className="text summary">{service.summary}</p>}
                      {service.label && (
                        <span className={`label ${service.label === "Online" ? "online" : "on-campus"}`}>
                          {service.label}
                        </span>
                      )}
                    </div>
                    <a className="arlo_tm_full_link" href="#" onClick={(e) => e.preventDefault()}></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {selectedService && (
  <div className="description_wrap" onClick={() => setSelectedService(null)}>
    <div className="service_popup_informations" onClick={(e) => e.stopPropagation()}>
      <div className="close">
  <a href="#" onClick={(e) => { e.preventDefault(); setSelectedService(null); }}>
      <FontAwesomeIcon icon={faTimes} />
  </a>
</div>


      <div className="image">
        <div
          className="main"
          data-img-url={selectedService?.image}
          style={{
            backgroundImage: `url(${selectedService?.image})`,
          }}
        ></div>
      </div>

      <div className="main_title">
        <h3>{selectedService?.title}</h3>
      </div>

      <div className="descriptions">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(selectedService?.description),
          }}
        />
      </div>
    </div>
  </div>
)}
        </div>
      </div>
    </section>
  );
};

export default Education;
