import React from "react";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import { TypewriterProvider } from "./contexts/TypeWriterContext";
import Navbar from "./components/Navbar/Navbar";
import Line from "./components/utils/Line";
import Header from "./components/Header/Section";
import TechStackSection from "./components/TechStack/Section";
import Switch from "./components/Switch/Section";
import Projects from "./components/Projects/Section";
import Footer from "./components/Footer/Section";
import RotatingQuote from "./components/RotatingQuote/Section";

function App() {
  return (
    <TypewriterProvider>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
				{/* <RotatingQuote /> */}
        <Navbar />
        <Header />
        <Line />
        <TechStackSection />
        <Switch />
        <Projects />
        <Footer />
      </ThemeProvider>
    </TypewriterProvider>
  );
}

export default App;
