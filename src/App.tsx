import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "react-bootstrap";
import { TypewriterProvider } from "./contexts/TypeWriterContext";
import Navbar from "./components/Navbar/Navbar";
import Line from "./components/utils/Line";
import TopWrapper from "./components/App/TopWrapper";

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
    </TypewriterProvider>
  );
}

export default App;
