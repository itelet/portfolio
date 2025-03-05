import React from "react";

import LinkedinIcon from "../../../assets/icons/linkedin";
import EmailIcon from "../../../assets/icons/email";
import IconElement from "./IconElement";

const IconSegment = () => {
  return (
    <div className="flex flex-row mt-5">
      <IconElement
        href={
          "https://www.linkedin.com/in/ádám-szabó-803297200"
        }
        text={"Linked"}
        icon={
          <LinkedinIcon height={"100%"} width={"100%"} fillColor={"#3A3A3A"} />
        }
      />
      <IconElement
        href={""}
        text={"Email"}
        icon={
          <EmailIcon height={"100%"} width={"100%"} fillColor={"#3A3A3A"} />
        }
      />
    </div>
  );
};

export default IconSegment;
