import { FooterLinkElement } from "./FooterLinkElement";
import { Title } from "./Title";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#131313] w-full pb-16">
        <Title />
        <FooterLinkElement
          aProps={{
            href: "https://github.com/itelet/portfolio",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Project link",
          }}
          text={"Portfolio website repository"}
        />
				<FooterLinkElement
          aProps={{
            href: "https://github.com/itelet",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Github profile",
          }}
          text={"Github profile"}
        />
				<FooterLinkElement
          aProps={{
            href: "https://www.linkedin.com/in/%C3%A1d%C3%A1m-szab%C3%B3-803297200/",
            target: "_blank",
            rel: "noopener noreferrer",
            title: "Github profile",
          }}
          text={"Linkedin profile"}
        />
				<FooterLinkElement
          aProps={{
            href: "mailto:szabo.adam.0725@gmail.com",
            title: "szabo.adam.0725@gmail.com",
          }}
          text={"szabo.adam.0725@gmail.com"}
        />
      </div>
    </>
  );
};
