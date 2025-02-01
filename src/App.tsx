import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "react-bootstrap";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { TypewriterProvider } from "./contexts/TypeWriterContext";

function App() {
  return (
    <TypewriterProvider>
      <div className="App flex flex-col justify-center items-center">
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <div className="h-6" />
          <Header />
          <About />
          <Experience />
          <Gallery />
          <Footer />
        </ThemeProvider>
      </div>
    </TypewriterProvider>
  );
}

export default App;
