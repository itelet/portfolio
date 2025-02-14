import { Col } from "react-bootstrap";
import { IconElement } from "./IconElement";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SectionProps } from "./types";

export const Section = ({ headingElement, mainText, icons }: SectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mt-10">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="h-full w-full flex items-start"
        >
          <img src={headingElement} alt="My Icon" className="w-auto h-8" />
        </Col>
        <Col>
          <div className="w-full">
            <p className="text-[#c5c5c5] text-left mt-3 pl-4 sm:pl-6 md:pl-6 lg:pl-6 font-[Inconsolata] text-lg">
              {mainText}
            </p>
          </div>
        </Col>
        <Col className="pl-4 justify-start">
          <div className="flex items-start gap-2 flex-wrap">
            {icons.map((icon) => {
              return (
                <IconElement
                  key={icon.text}
                  icon={icon.icon}
                  text={icon.text}
                  bgColor={icon.bgColor}
                  textColor={icon.textColor}
                />
              );
            })}
          </div>
        </Col>
      </div>
    </motion.div>
  );
};
