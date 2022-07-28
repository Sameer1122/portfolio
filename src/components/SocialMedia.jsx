import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="http://www.github.com/Sameer1122"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.fiverr.com/users/sameerahmad223/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a
      target="_blank"
      href="https://www.linkedin.com/in/shehper-sameer-ahmed-0627b9181/?originalSubdomain=pk"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
