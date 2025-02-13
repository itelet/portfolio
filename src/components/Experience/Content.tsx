import { Col, Row } from "react-bootstrap";
import ExperienceHeading01 from "../../assets/images/experience_text_01.svg";
import ExperienceHeading02 from "../../assets/images/experience_text_02.svg";
import ExperienceHeading03 from "../../assets/images/experience_text_03.svg";
import ExperienceHeading04 from "../../assets/images/experience_text_04.svg";
import unityIcon from "../../assets/icons/unity_icon.svg";
import blenderIcon from "../../assets/icons/blender_icon.svg";
import csharpIcon from "../../assets/icons/c-sharp_icon.svg";
import nodeIcon from "../../assets/icons/node_icon.svg";
import tsIcon from "../../assets/icons/ts_icon.svg";
import mongoIcon from "../../assets/icons/mongo_icon.svg";
import gitlabIcon from "../../assets/icons/gitlab_icon.svg";
import reactnativeIcon from "../../assets/icons/react_native_icon.svg";
import expoIcon from "../../assets/icons/expo_icon.svg";
import firebaseIcon from "../../assets/icons/firebase_icon.svg";
import figmaIcon from "../../assets/icons/figma_icon.svg";
import githubIcon from "../../assets/icons/github_icon.svg";
import pythonIcon from "../../assets/icons/python_icon.svg";
import electronIcon from "../../assets/icons/electron_icon.svg";
import soundWaveIcon from "../../assets/icons/sound_wave_icon.svg";
import { Section } from "./Section";

export const Content = () => {
  return (
    <Row className="h-full w-[90%]">
      <Col xs={12} sm={12} md={12} lg={12} className="h-full w-full">
        <Section
          headingElement={ExperienceHeading01}
          mainText={
						<p>
							My passion for software development began in <span className="font-extrabold">2010</span> when I was just 10 years old. I started by writing and maintaining scripts for popular games, which sparked my interest in coding. Although I briefly lost interest, high school reignited my curiosity. During that time, I explored game development with <span className="font-extrabold">Unity</span> and 3D modeling using <span className="font-extrabold">Blender</span>.
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
							After high school, I completed a one-year vocational training course in computer science. <br /> For my final exam project, I created a game inspired by the popular mobile game Piano Tiles, but developed for Windows using <span className="font-extrabold">C#</span> and <span className="font-extrabold">WinForms</span>. <br /><br />This project solidified my skills in software design and application development, setting the foundation for my career in tech.
						</p>
					}
          icons={[
						{
							icon: csharpIcon,
							text: "Winforms",
							bgColor: "bg-[#9D4F96]",
							textColor: "text-[#6F1C7B]",
						},
						{
							icon: soundWaveIcon,
							text: "Sound synthesis",
							bgColor: "bg-[#FAFAFA]",
							textColor: "text-[#1E1E1E]",
						}
          ]}
        />
				<Section
          headingElement={ExperienceHeading03}
					mainText={
						<p>
							After completing my vocational training, I started university while also joining Gamma Digital Kft., a Hungarian company specializing in <span className="font-extrabold">autonomous warehouse solutions</span>. I initially worked as a <span className="font-extrabold">Research and Development Intern</span>, focusing on maintaining and developing autonomous systems. My responsibilities mostly included working with autonomous conveyor routing, crane management and other robotics systems. 
							<br />
							<br />
							Later, I transitioned into <span className="font-extrabold">Automated Guided Vehicle (AGV)</span> solutions. Here, I was promoted to <span className="font-extrabold">System Integrator Engineer</span>. In this role, I co-developed a new framework for managing AGV tasks alongside two colleagues. I frequently collaborated with customers to discuss project details. Additionally, I was involved in several on-site developments. This experience gave me a deeper understanding of large-scale automation projects.
							<br />
							<br />
							I also did some freelancing, mostly by creating web applications such as complex data calculators.
						</p>
					}
          icons={[
						{
							icon: nodeIcon,
							text: "Node.JS",
							bgColor: "bg-[#182118]",
							textColor: "text-[#FAFAFA]",
						},
						{
							icon: tsIcon,
							text: "TypeScript",
							bgColor: "bg-[#112133]",
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
							In my free time, I started developing my own <span className="font-extrabold">mobile application</span> called <span className="font-extrabold">Solid Taste</span>, a meal planner app designed to simplify meal preparation.<br /><br />The app includes multiple features such as cooking mode, automatic shopping list generation, user-friendly meal planning, light/dark mode, search and filtering, multi-language support, and a measurement unit switch, among many others. The app was built entirely from scratch, but it is <span className="font-extrabold">still in development</span> and not yet available on iOS or Android.<br /><br />Alongside this project, I have also developed several quality-of-life applications to streamline managing the app. These include database update automation scripts, a recipe data scraper, and various other tools to improve efficiency and reduce manual work.
						</p>
					}
          icons={[
						{
							icon: reactnativeIcon,
							text: "React Native",
							bgColor: "bg-[#122323]",
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
							bgColor: "bg-[#241517]",
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
							bgColor: "bg-[#182118]",
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
    </Row>
  );
};
