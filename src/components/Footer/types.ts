import { AnchorHTMLAttributes } from "react";

export type FooterLink = {
  aProps: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  text: string;
};

export type FooterLinkElementProps = {
  aProps: AnchorHTMLAttributes<HTMLAnchorElement>;
  text: string;
};
