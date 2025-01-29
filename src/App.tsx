import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "react-bootstrap";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  return (
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
				
				{/* TODO Temp */}
				<div className="h-80" />
      </ThemeProvider>
    </div>
  );
}

export default App;
