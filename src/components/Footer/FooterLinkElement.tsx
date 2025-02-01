import { Col } from "react-bootstrap";
import { AnchorHTMLAttributes } from "react";
import { FooterLinkElementProps } from "./types";

export const FooterLinkElement = ({ aProps, text }: FooterLinkElementProps) => {
  return (
    <Col className="mt-4">
      <span className="font-[Inconsolata] font-light text-2xl">
        <a
          className="no-underline text-white border-2 border-[#272727] p-2 rounded-md"
          {...aProps} // Spread anchor properties here
        >
          {text}
        </a>
      </span>
    </Col>
  );
};
