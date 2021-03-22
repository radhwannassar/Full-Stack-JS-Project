
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PageInrouvable from './components/PageIntrouvable';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Register">
          <Register/>  
        </Route>
        <Route exact path="/Login">
          <Login/>
        </Route>
        <Route path="*">
          <PageInrouvable/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
