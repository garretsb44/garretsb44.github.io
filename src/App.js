import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Discover from "./pages/Portfolio";
import About from "./pages/About";
import Search from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Discover />
          </Route>
          <Route exact path="/contact">
            <Search />
          </Route>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
