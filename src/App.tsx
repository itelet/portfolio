import React from "react";
import "./App.css";
import Header from "./components/Header/Section";
import { ThemeProvider } from "react-bootstrap";
import { TypewriterProvider } from "./contexts/TypeWriterContext";
import Navbar from "./components/Navbar/Navbar";
import Line from "./components/utils/Line";
import TopWrapper from "./components/lib/TopWrapper";
import TechStackSection from "./components/TechStack/Section";
import Switch from "./components/Switch/Section";
import Projects from './components/Projects/Section';
import Footer from './components/Footer/Section';

function App() {
  return (
    <TypewriterProvider>
      <Navbar />
      <TopWrapper>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <Header />
        </ThemeProvider>
      </TopWrapper>
      <Line />
      <TopWrapper>
        <TechStackSection />
      </TopWrapper>
			<TopWrapper>
				<Switch />
			</TopWrapper>
			<TopWrapper>
				<Projects />
			</TopWrapper>
			<TopWrapper>
				<Footer />
			</TopWrapper>
    </TypewriterProvider>
  );
}

export default App;
