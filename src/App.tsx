import React from "react";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import { TypewriterProvider } from "./contexts/TypeWriterContext";
import { Route, Switch } from "wouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Section";
import Home from "./pages/Home";
import About from "./pages/About/Section";
import Projects from './pages/Projects/Projects';

import Project from './pages/Project/Section';

function App() {
  return (
    <TypewriterProvider>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        {/* <RotatingQuote /> */}
        <Navbar />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:name" component={Project} />
        </Switch>
        {/* <Footer /> */}
      </ThemeProvider>
    </TypewriterProvider>
  );
}

export default App;
