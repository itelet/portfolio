import { useLocation } from "wouter";
import Description from "./Description";
import DiscoverButton from "./DiscoverButton";
import ElementWrapper from "./ElementWrapper";
import ImageWithContainer from "./ImageWithContainer";
import Title from "./Title";

const Element = ({
  img,
  title,
  description,
  link,
}: {
  img: string;
  title: string;
  description: string;
  link: string;
}) => {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate(`/projects/${link}`);
  };

  return (
    <ElementWrapper handleClick={handleClick}>
      {/* image */}
      <ImageWithContainer img={img} title={title} />
      <div className="flex flex-row items-center justify-between mt-4 px-6">
        <Title title={title} />
        <DiscoverButton handleClick={handleClick} />
      </div>
      <Description description={description} />
    </ElementWrapper>
  );
};

export default Element;
