import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Bugsubmit from "./Components/Bugsubmit";
import Navbar from "./Components/Navbar";
import Signin from "./Components/Signin";
import Landingpage from "./Landingpage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Landingpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
