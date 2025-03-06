import { Link } from "wouter";
import LinkElement from "./components/LinkElement";
import LinkWrapper from "./components/LinkWrapper";
import NavWrapper from "./components/NavWrapper";

const Navbar = () => {
  return (
    <NavWrapper>
      <LinkWrapper>
        <LinkElement href={`/`} text="Home" />
        <LinkElement href={`/about`} text="About" />
        <LinkElement href={`/projects`} text="Projects" />
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Navbar;
