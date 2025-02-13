import { Col, Row } from "react-bootstrap";
import AboutSVG from "../../assets/images/about";

export const Content = () => {
  return (
    <Row className="mb-3 w-[90%]">
      {/* <Col
        sm={6}
        md={5}
        xs={6}
        className="h-100 d-flex align-items-stretch justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end"
      >
        <div className="mb-10 sm:mb-12 h-100 sm:mr-0 md:mr-4 lg:mr-4 xl:mr-4">
          <AboutSVG height={"100%"} width={"100%"} />
        </div>
      </Col> */}
      <Col sm={12} md={12} xs={12} className="border-blue-500">
        <p className="text-[#c5c5c5] text-left font-[Inconsolata] font-normal text-base lg:text-lg">
          I'm{" "}
          <span className="font-extrabold">24 years old</span> and I live in
          Hungary. I'm a native{" "}
          <span className="font-extrabold inline">Hungarian</span> speaker,
          fluent in <span className="font-extrabold inline">English</span>, and
          somewhat familiar with{" "}
          <span className="font-extrabold inline">German</span>.
          <br />
          <br />
          I'm currently studying{" "}
          <span className="font-extrabold inline">
            computer science
          </span> at <span className="font-extrabold inline">DUE</span>, a hungarian university. I'm enrolled in a hybrid degree program, where
          most of the coursework is done{" "}
          <span className="font-extrabold inline">remotely</span>, but I attend
          in-person sessions occasionally, mostly on weekends. The degree is
          equivalent to that of a traditional program.
          <br />
          <br />
          In my free time, I enjoy playing chess and developing small
          quality-of-life modifications, such as creating Chrome extensions. I
          also work on automations to streamline everyday tasks and make them
          more efficient.
        </p>
      </Col>
    </Row>
  );
};
