import { Col, Row } from "react-bootstrap";
import { IconElement } from "./IconElement";
import ExperienceHeading01 from "../../assets/images/experience_text_01.svg";
import ExperienceHeading02 from "../../assets/images/experience_text_02.svg";
import ExperienceHeading03 from "../../assets/images/experience_text_03.svg";
import ExperienceHeading04 from "../../assets/images/experience_text_04.svg";
import ExperienceInfographic from "../../assets/images/experience_infographic.svg";
import unityIcon from "../../assets/images/unity_icon.svg";
import blenderIcon from "../../assets/images/blender_icon.svg";
import csharpIcon from "../../assets/images/c-sharp_icon.svg";
import nodeIcon from "../../assets/images/node_icon.svg";
import tsIcon from "../../assets/images/ts_icon.svg";
import mongoIcon from "../../assets/images/mongo_icon.svg";
import gitlabIcon from "../../assets/images/gitlab_icon.svg";
import reactnativeIcon from "../../assets/images/react_native_icon.svg";
import expoIcon from "../../assets/images/expo_icon.svg";
import firebaseIcon from "../../assets/images/firebase-icon.svg";
import figmaIcon from "../../assets/images/figma_icon.svg";
import githubIcon from "../../assets/images/github_icon.svg";
import pythonIcon from "../../assets/images/python_icon.svg";
import electronIcon from "../../assets/images/electron_icon.svg";
import { Section } from "./Section";

export const Content = () => {
  return (
    <Row className="h-full w-[85%]">
      <Col xs={12} sm={12} md={12} lg={12} className="h-full w-full">
        <Section
          headingElement={ExperienceHeading01}
          mainText={
						<p>
							My passion for software development began in <span className="font-extrabold">2010</span> when I was just 10 years old. I started by writing and maintaining scripts for popular games, which sparked my interest in coding. Although I briefly lost interest, high school reignited my curiosity. During this time, I explored game development with <span className="font-extrabold">Unity</span> and 3D modeling using <span className="font-extrabold">Blender</span>.
						</p>
					}
          icons={[
            {
              icon: unityIcon,
              text: "Unity",
              bgColor: "bg-[#3A3A3A]",
              textColor: "text-[#FAFAFA]",
            },
						{
							icon: blenderIcon,
							text: "Blender",
							bgColor: "bg-[#EFB57B]",
							textColor: "text-[#265787]"
						}
          ]}
        />
				<Section
          headingElement={ExperienceHeading02}
          mainText={
						<p>
							For my final exam project, I created a game inspired by the popular mobile game Piano Tiles, but developed for Windows using <span className="font-extrabold">C#</span> and <span className="font-extrabold">WinForms</span>. This project solidified my skills in software design and application development, setting the foundation for my career in tech.
						</p>
					}
          icons={[
						{
							icon: csharpIcon,
							text: "Winforms",
							bgColor: "bg-[#9D4F96]",
							textColor: "text-[#6F1C7B]",
						}
          ]}
        />
				<Section
          headingElement={ExperienceHeading03}
					mainText={
						<p>
							After completing my vocational training, I started university and at the same time I also joined Gamma Digital Kft., a Hungarian company specializing in <span className="font-extrabold">autonomous warehouse solutions</span>. I initially worked as a <span className="font-extrabold">Research and Development Intern</span>, focusing on maintaining and developing autonomous systems. My responsibilities mostly included working with autonomous conveyor routing, crane management and other robotics systems. 
							<br />
							<br />
							Later, I transitioned into <span className="font-extrabold">Automated Guided Vehicle (AGV)</span> solutions. Here, I was promoted to <span className="font-extrabold">System Integrator Engineer</span>. In this role, I co-developed a new framework for managing AGV tasks alongside two colleagues. I frequently engaged with customers to discuss project details. Additionally, I was involved in several on-site developments. This experience gave me a deeper understanding of large-scale automation projects.
							<br />
							<br />
							I also did some freelancing, mostly by creating web applications such as complex data calculators.
						</p>
					}
          icons={[
						{
							icon: nodeIcon,
							text: "Node.JS",
							bgColor: "bg-[#9FFF8A]",
							textColor: "text-[#539E43]",
						},
						{
							icon: tsIcon,
							text: "TypeScript",
							bgColor: "bg-[#91BDED]",
							textColor: "text-[#3178C6]",
						},
						{
							icon: mongoIcon,
							text: "mongoDB",
							bgColor: "bg-[#66FF5B]",
							textColor: "text-[#2B8425]",
						},
						{
							icon: gitlabIcon,
							text: "GitLab",
							bgColor: "bg-[#FF9382]",
							textColor: "text-[#E24329]",
						}
          ]}
        />
				<Section
          headingElement={ExperienceHeading04}
					mainText={
						<p className="">
							In my free time, I started developing my own <span className="font-extrabold">mobile application</span> called <span className="font-extrabold">Solid Taste</span>, a meal planner app designed to simplify meal preparation. <br /><br />Multiple functionalities include cooking mode, automatic shopping list generation, user-friendly meal planning, light/dark mode, search, filter, multiple languages, measurement unit switch and much more. The app was built entirely from scratch, but it is <span className="font-extrabold">still in development</span> and not yet available on iOS nor on Android.
						</p>
					}
          icons={[
						{
							icon: reactnativeIcon,
							text: "React Native",
							bgColor: "bg-[#F6FDFF]",
							textColor: "text-[#53C1DE]",
						},
						{
							icon: expoIcon,
							text: "Expo",
							bgColor: "bg-[#3A3A3A]",
							textColor: "text-[#FAFAFA]",
						},
						{
							icon: firebaseIcon,
							text: "Firebase",
							bgColor: "bg-[#FFD3A7]",
							textColor: "text-[#F6820C]",
						},
						{
							icon: figmaIcon,
							text: "Figma",
							bgColor: "bg-[#F59B98]",
							textColor: "text-[#FFFFFF]",
						},
						{
							icon: nodeIcon,
							text: "Node.JS",
							bgColor: "bg-[#9FFF8A]",
							textColor: "text-[#539E43]",
						},
						{
							icon: githubIcon,
							text: "Github",
							bgColor: "bg-[#3A3A3A]",
							textColor: "text-[#FFFFFF]",
						},
						{
							icon: pythonIcon,
							text: "Python",
							bgColor: "bg-[#FCCA3F]",
							textColor: "text-[#366994]",
						},
						{
							icon: electronIcon,
							text: "Electron",
							bgColor: "bg-[#1B1C26]",
							textColor: "text-[#9FEAF9]",
						}
          ]}
        />
      </Col>
      {/* <Col xs={4} sm={4} md={4} lg={4}>
        <img
          src={ExperienceInfographic}
          alt="My Icon"
          className="w-full h-full"
        />
      </Col> */}
    </Row>
  );
};
