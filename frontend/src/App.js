import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Report from "./pages/Report";
import ItemsPage from "./pages/ItemsPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Report" component={Report} />
        <Route path="/ItemsPage" component={ItemsPage} />
        <Route path="/OrderPage" component={OrderPage} />
      </Switch>
    </Router>
  );
}
export default App;
