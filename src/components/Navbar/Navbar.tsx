import LinkElement from "./components/LinkElement";
import LinkWrapper from "./components/LinkWrapper";
import NavWrapper from "./components/NavWrapper";

const Navbar = () => {
  return (
    <NavWrapper>
      <LinkWrapper>
        <LinkElement href="/portfolio" text="Home" />
        <LinkElement href="/portfolio/about" text="About" />
        <LinkElement href="/portfolio/projects" text="Projects" />
        <LinkElement href="/portfolio/contact" text="Contact" />
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Navbar;
