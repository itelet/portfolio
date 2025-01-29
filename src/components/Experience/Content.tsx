import { Col, Row } from "react-bootstrap";
import ExperienceHeading01 from "../../assets/images/experience_text_01.svg";
import ExperienceInfographic from "../../assets/images/experience_infographic.svg";
import unityIcon from "../../assets/images/unity_icon.svg";
import blenderIcon from "../../assets/images/blender_icon.svg";
import { IconElement } from "./IconElement";
import ExperienceHeading02 from '../../assets/images/experience_text_02.svg'
import csharpIcon from '../../assets/images/c-sharp_icon.svg'

export const Content = () => {
  return (
    <Row className="h-full w-[85%]">
      <Col xs={8} sm={8} md={8} lg={8} className="h-full w-full">
        <div>
          <Col xs={12} sm={12} md={12} lg={12} className="h-full w-full">
					<img src={ExperienceHeading01} alt="My Icon" className="w-full h-full" />
          </Col>
          <Col>
            <div className="w-full">
              <p className="text-white text-left mt-4 pl-8 font-[Inconsolata]">
                My passion for software development began in 2010 when I was
                just 10 years old. I started by writing and maintaining scripts
                for popular games, which sparked my interest in coding. Although
                I briefly lost interest, high school reignited my curiosity.
                During this time, I explored game development with Unity and 3D
                modeling using Blender.
              </p>
            </div>
          </Col>
          <Col className="pl-8 justify-start">
            <div className="flex items-start space-x-4 h-16">
              <IconElement
                icon={unityIcon}
                text="Unity"
                bgColor={"#3A3A3A"}
                textColor={"#FAFAFA"}
              />
              <IconElement
                icon={blenderIcon}
                text="Blender"
                bgColor={"#EFB57B"}
                textColor={"#265787"}
              />
            </div>
          </Col>
        </div>
        <div>
          <Col xs={12} sm={12} md={12} lg={12} className="h-full w-full">
						<img src={ExperienceHeading02} alt="My Icon" className="w-full h-full" />
          </Col>
          <Col>
            <div className="w-full">
              <p className="text-white text-left mt-4 pl-8 font-[Inconsolata]">
							For my final exam project, I created a game inspired by the popular mobile game Piano Tiles, but developed for Windows using C# and WinForms. This project solidified my skills in software design and application development, setting the foundation for my career in tech.
              </p>
            </div>
          </Col>
          <Col className="pl-8 justify-start">
            <div className="flex items-start space-x-4 h-16">
              <IconElement
                icon={csharpIcon}
                text="Winforms"
                bgColor={"#9D4F96"}
                textColor={"#6F1C7B"}
              />
            </div>
          </Col>
        </div>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4}>
				<img src={ExperienceInfographic} alt="My Icon" className="w-full h-full" />
				{/* <ExperienceHeading01 width={"100%"} height={"100%"} /> */}
				{/* <div>
          <ExperienceInfographic />
        </div> */}
      </Col>
    </Row>
  );
};
