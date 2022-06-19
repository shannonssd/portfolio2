import React from "react";
import "./SoftwareSkill.scss";
import {projects} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {/* {projects.softwareSkills.map((skills, i) => { */}
              <li
                // key={i}
                className="software-skill-inline"
                // name={skills.skillName}
              >
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                {/* <p>{skills.skillName}</p> */}
                <p>MongoDB</p>
                <p>AWS S3</p>
                <p>Socket.io</p>
                <p>Express</p>
                <p>Node.js</p>
                <p>Telegram API</p>
                <p>CRON</p>
                <p>React</p>
                <p>Material UI</p>
              </li>
          {/* })} */}
        </ul>
      </div>
    </div>
  );
}
