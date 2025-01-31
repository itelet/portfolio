import React from "react";

import LinkedinIcon from "../../assets/icons/linkedin";
import GithubIcon from "../../assets/icons/github";
import EmailIcon from "../../assets/icons/email";

const IconSegment = () => {
  return (
    <div className="flex flex-row mt-1">
      <a
        href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-803297200/"
        target="_blank"
        rel="noopener noreferrer"
				title="https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-803297200/"
      >
        <div className="w-12 h-12 rounded-xl">
          <LinkedinIcon height={"100%"} width={"100%"} fillColor={"#5C6A81"} />
        </div>
      </a>
      <a
        href="https://github.com/itelet"
        target="_blank"
        rel="noopener noreferrer"
        title="https://github.com/itelet"
      >
        <div className="w-12 h-12 ml-3 rounded-xl">
          <GithubIcon height={"100%"} width={"100%"} fillColor={"#B8B8B8"} />
        </div>
      </a>
      <a
        href="mailto:szabo.adam.0725@gmail.com"
        title="szabo.adam.0725@gmail.com"
      >
        <div className="w-12 h-12 ml-3 rounded-xl">
          <EmailIcon height={"100%"} width={"100%"} fillColor={"#FF9B9B"} />
        </div>
      </a>
    </div>
  );
};

export default IconSegment;
