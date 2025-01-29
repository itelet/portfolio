import { Col, Row } from "react-bootstrap";
import AboutSVG from "../../assets/images/about";

export const Content = () => {
  return (
    <Row className="w-[90%] sm:w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] justify-center mb-3">
      <Col
        sm={6}
        md={5}
        xs={6}
        className="h-100 d-flex align-items-stretch justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end"
      >
        <div className="mb-10 sm:mb-12 h-100 sm:mr-0 md:mr-4 lg:mr-4 xl:mr-4">
          <AboutSVG height={"100%"} width={"100%"} />
        </div>
      </Col>
      <Col sm={10} md={7} xs={10} className="border-blue-500">
        <p className="text-white text-left font-[Inconsolata] font-normal text-base sm:text-base md:text-base lg:text-lg xl:text-lg">
          My name is Ádám Szabó, I'm{" "}
          <p className="font-extrabold inline">24 years old</p> and live in
          Hungary. I'm a native{" "}
          <p className="font-extrabold inline">Hungarian</p> speaker, fluent in{" "}
          <p className="font-extrabold inline">English</p>, and somewhat
          familiar with <p className="font-extrabold inline">German</p>.
          <br />
          <br />
          I'm currently studying{" "}
          <p className="font-extrabold inline">computer science</p> at
          university in Hungary. I'm enrolled in a hybrid degree program, where
          most of the coursework is done{" "}
          <p className="font-extrabold inline">remotely</p>, but I attend
          in-person sessions five times per term, plus exams. The degree is
          equivalent to that of a traditional program. I have completed four
          terms and have three more to go.
          <br />
          <br />
          In my free time, I enjoy playing chess and developing small
          quality-of-life modifications, such as creating chrome extensions. I
          also work on automations to streamline everyday tasks and make them
          more efficient.
        </p>
      </Col>
    </Row>
  );
};
