import { Col } from "react-bootstrap";

export const Title = () => {
  return (
    <Col className="pt-5">
      <span className="font-[Inconsolata] font-medium text-3xl text-[#70C368]">
        This website was built using <span className="text-white">React</span> and <span className="text-white">Tailwind CSS</span>
      </span>
    </Col>
  );
};
