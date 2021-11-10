import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './containers/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-link" to="/home">Home</Link>
          <Link className="App-link" to="/about">About</Link>
          <Link className="App-link" to="/users">Users</Link>
        </header>
      </div>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/users">
          <Users />
        </Route>
      </Switch> 
    </Router>

    
  );
}

export default App;

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
