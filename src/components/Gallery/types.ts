// types.ts

import { ReactNode } from "react";

/*
	These were generated by AI LLM, done manual checking
*/

export type GalleryCardModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  images: { src: string; description: string }[];
  backdropClass?: string;
};

export type GalleryCardElementProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  images: { src: string; description: string }[];
  title: string;
};

export type GalleryCardProps = {
  title: string;
  images: { src: string; description: string }[];
};

export type Gallery = {
  title: string;
  images: Image[];
};

export type ContentProps = {
  galleryData: Gallery[];
};

export type FooterLinkElementProps = {
  aProps: {
    href: string;
    target?: string;
    rel?: string;
    title: string;
  };
  text: string;
};

export type SectionProps = {
  headingElement: string;
  mainText: ReactNode;
  icons: { icon: string; text: string; bgColor: string; textColor: string }[];
};

export type IndicatorIconProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

type Image = {
  src: string;
  description: string;
};

export type CarouselContentProps = {
  images: { src: string; description: string }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type CarouselImageProps = {
  image: { src: string; description: string };
  isActive: boolean;
  index: number;
};

export type CarouselIndicatorsProps = {
  images: { src: string; description: string }[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type CloseButtonProps = {
  onClick: () => void;
};

export type ImageDescriptionProps = {
  description: string;
};
