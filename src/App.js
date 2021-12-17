import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import CNN from "./components/CNN/CNN";
import BBC from "./components/BBC/BBC";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cnn" exact>
          <CNN />
        </Route>
        <Route path="/bbc" exact>
          <BBC />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
