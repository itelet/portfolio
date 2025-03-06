import React from "react";

import SelfImage from "../../../assets/images/self.jpg";

const TextWithImage = () => {
  return (
    <div className="h-auto text-left p-6 w-full grid grid-cols-1 md:grid-cols-[65%_35%] gap-4 mb-4">
      <AboutMe />
      <Image />
    </div>
  );
};

const Image = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={SelfImage}
        alt="Szabó Ádám"
        className="max-w-full h-auto max-h-56 object-contain rounded-lg border border-[#1e1e1e]"
      />
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center">
      <AboutMeText />
      <AboutMeDescription />
    </div>
  );
};

const AboutMeText = () => {
  return (
    <span className="text-5xl font-[Inter] font-semibold text-white">
      About me
    </span>
  );
};

const AboutMeDescription = () => {
  return (
    <span className="text-xl font-[Inter] font-normal text-[#9A9A9A] mt-4">
      Hi, I'm Ádám, a 24-year-old computer science engineer based in Hungary 🇭🇺.
      I'm a native Hungarian speaker, fluent in English, and somewhat familiar
      with German. I'm currently studying at the University of Dunaújváros. I am
      in a hybrid degree program, where most coursework is done remotely.
      <br />
      <br /> In my free time, I enjoy playing chess and developing small
      quality-of-life improvements, like Chrome extensions and automations that
      make everyday tasks more efficient. I also love reading and researching
      history topics, particularly cultures, religions, and their significance
      in shaping the world as we know it today.
    </span>
  );
};

export default TextWithImage;
