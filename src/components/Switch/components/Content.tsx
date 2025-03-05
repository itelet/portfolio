import experiencesConfig from "../../../config/experiences";
import educationConfig from "../../../config/education";
import ContentElement from "./ContentElement";

const Content = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="pt-0 mt-8 w-full">
      {activeTab === "Work"
        ? experiencesConfig.map((elem) => {
            const { img, fromTo, company, position, description } = elem;

            return (
              <ContentElement
                key={description}
                img={img}
                fromTo={fromTo}
                company={company}
                position={position}
                description={description}
              />
            );
          })
        : educationConfig.map((elem) => {
            const { img, fromTo, company, position, description } = elem;

            return (
              <ContentElement
                key={description}
                img={img}
                fromTo={fromTo}
                company={company}
                position={position}
                description={description}
              />
            );
          })}
    </div>
  );
};

export default Content;
