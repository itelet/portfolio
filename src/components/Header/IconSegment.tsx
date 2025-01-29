import React from "react";

import LinkedinIcon from "../../assets/icons/linkedin";
import GithubIcon from "../../assets/icons/github";
import EmailIcon from "../../assets/icons/email";

const IconSegment = () => {
  return (
    <div className="flex flex-row mt-1">
      <div className="w-12 h-12 rounded-xl">
        <LinkedinIcon height={"100%"} width={"100%"} fillColor={"#5C6A81"} />
      </div>
      <div className="w-12 h-12 ml-3 rounded-xl">
        <GithubIcon height={"100%"} width={"100%"} fillColor={"#B8B8B8"} />
      </div>
      <div className="w-12 h-12 ml-3 rounded-xl">
        <EmailIcon height={"100%"} width={"100%"} fillColor={"#FF9B9B"} />
      </div>
    </div>
  );
};

export default IconSegment;
