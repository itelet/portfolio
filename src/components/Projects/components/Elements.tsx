import React from "react";

import projectsConfig from "../../../config/projects";
import ElementsWrapper from "./ElementsWrapper";
import Element from "./Element";

const Elements = () => {
  return (
    <ElementsWrapper>
      {projectsConfig.map((elem) => {
        const { img, title, description } = elem;
        return (
          <Element
            key={description}
            img={img}
            title={title}
            description={description}
          />
        );
      })}
    </ElementsWrapper>
  );
};

export default Elements;
