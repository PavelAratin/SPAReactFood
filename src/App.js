import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import './index.css';
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <React.Fragment>
      <Router basename='/SPAReactFood'>
        <Header></Header>
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default App;
