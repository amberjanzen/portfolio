import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

const Experience = (element) => {
  return (
    <div>
      <div id="experience">
        <div className="container">
            <h2>Skills</h2>
          <div className="section-title">
          </div>
          <div class="skill-section">
            <ul class="skill-grid">
              <li>
                <div class="skill-box skill-img-1">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Research
                  </h3>
                  <p>
                    User Experience Research, Interviews, Surveys, Focus Groups,
                    Ethnographic Methods, Demographic Research, Participant
                    Observation, Data Analysis, Observation, Benchmarking, Data
                    Coding, Mapping,
                  </p>
                </div>
              </li>
              <li>
                <div class="skill-box skill-img-2">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Design
                  </h3>
                  <p>
                    UX Design, Graphic Design, Typography, Color Theory,
                    Branding, Prototyping, WireFraming, Sketching, Equity,
                    Accessibility, Information Design
                  </p>
                </div>
              </li>
              <li>
                <div class="skill-box skill-img-3">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Development
                  </h3>
                  <p>
                    HTML, CSS, JavaScript, TypeScript, APIs, Node.js, React,
                    PERN Application, Heroku, Firebase, Database Architecture,
                    responsive web design, front-end & full-stack development.
                  </p>
                </div>
              </li>
              <li>
                <div class="skill-box skill-img-4">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Engagement
                  </h3>
                  <p>
                    Empathy, Cross-Cultural Collaboration, Project Management,
                    Client & Stakeholder Interaction, Marketing, Public Input,
                    Creative Programming,
                  </p>
                </div>
              </li>
              <li>
                <div class="skill-box skill-img-5">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Tools
                  </h3>
                  <p>
                    Illustrator, Indesign, XD, Sketchup, Figma, SurveyMonkey,
                    TypeForm, Esri Business Analyst, ArcMap, ArcGIS Pro,
                    Wordpress
                  </p>
                </div>
              </li>
              <li>
                <div class="skill-box skill-img-6">
                  <h3>
                    <FontAwesomeIcon icon={faCoffee} size="lg" />
                    <br />
                    Communication
                  </h3>
                  <p>
                    Writing, Public Speaking, Agile Methodologies, Microsoft
                    Teams, Miro, Slack, Trello, MailChimp, Zoom, Asana,
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
