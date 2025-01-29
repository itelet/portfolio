import { Col } from "react-bootstrap";
import { IconElement } from "./IconElement";

export const Section = ({ headingElement, mainText, icons }) => {
  return (
    <div className="mt-10">
      <Col xs={12} sm={12} md={12} lg={12} className="h-full w-full flex items-start">
				<img
          src={headingElement}
          alt="My Icon"
          className="w-auto h-8"
        />
      </Col>
      <Col>
        <div className="w-full">
          <p className="text-white text-left mt-3 pl-8 font-[Inconsolata] text-lg">
            {mainText}
          </p>
        </div>
      </Col>
      <Col className="pl-8 justify-start">
        <div className="flex items-start gap-2 flex-wrap">
					{
						icons.map((icon) => {
							return (
								<IconElement
									key={icon.text}
									icon={icon.icon}
									text={icon.text}
									bgColor={icon.bgColor}
									textColor={icon.textColor}
								/>
							)
						})
					}
        </div>
      </Col>
    </div>
  );
};
