import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <span>copyright</span>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
