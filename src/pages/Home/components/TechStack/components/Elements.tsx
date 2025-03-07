import techStackElements from "../../../../../config/techStackElements";
import Element from "./Element";
import ElementWrapper from "./ElementWrapper";

const Elements = () => {
  return (
    <ElementWrapper>
      {techStackElements.map((elem) => {
        return <Element title={elem.title} selector={elem.selector} />;
      })}
    </ElementWrapper>
  );
};

export default Elements;
