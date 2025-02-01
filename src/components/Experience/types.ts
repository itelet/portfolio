import { ReactNode } from "react";

export type IconProps = {
  icon: string;
  text: string;
  bgColor: string;
  textColor: string;
};

export type Icon = {
  icon: string;
  text: string;
  bgColor: string;
  textColor: string;
};

export type SectionProps = {
  headingElement: string;
	mainText: ReactNode;
  icons: Icon[];
};