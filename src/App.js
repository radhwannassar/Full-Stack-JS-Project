import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import PageInrouvable from "./components/PageIntrouvable";
import ConnectedHome from "./components/ConnectedHome";
import Categories from "./components/Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import FittingRoom from "./components/FittingRoom";
import { UserProvider } from "./UserContext";
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Register">
              <Register />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Categories">
              <Categories />
            </Route>
            <Route exact path="/ConnectedHome">
              <ConnectedHome />
            </Route>
            <Route exact path="/FittingRoom">
              <FittingRoom />
            </Route>
            <Route path="*">
              <PageInrouvable />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
