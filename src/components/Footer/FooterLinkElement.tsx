import { Col } from "react-bootstrap";

export const FooterLinkElement = ({ aProps, text }) => {
  return (
    <Col className="mt-4">
      <span className="font-[Inconsolata] font-light text-2xl">
        <a
          className="no-underline text-white border-2 border-[#272727] p-2 rounded-md"
					{...aProps}
        >
          {text}
        </a>
      </span>
    </Col>
  );
};
