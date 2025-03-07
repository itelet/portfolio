import React from "react";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";
import { TypewriterProvider } from "./contexts/TypeWriterContext";
import { Route, Router, Switch } from "wouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Section";
import Home from "./pages/Home/Home";
import About from "./pages/About/Section";
import Projects from "./pages/Projects/Projects";
import { useHashLocation } from "wouter/use-hash-location";
import Project from "./pages/Project/Section";
import { FontLoaderProvider } from "./contexts/FontLoaderContext";

function App() {
  return (
    <Router hook={useHashLocation}>
			<div className="min-h-screen flex flex-col">
				<FontLoaderProvider>
					<TypewriterProvider>
						<ThemeProvider
							breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
							minBreakpoint="xxs"
						>
							<Navbar />
							<Switch>
								<Route path="/" component={Home} />
								<Route path="/about" component={About} />
								<Route path="/projects" component={Projects} />
								<Route path="/projects/:name" component={Project} />
							</Switch>
							<div className="h-10" />
							<Footer />
						</ThemeProvider>
					</TypewriterProvider>
				</FontLoaderProvider>
			</div>
    </Router>
  );
}

export default App;
