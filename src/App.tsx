import React from 'react';
import Login from './pages/Login/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personages from "./pages/Personages";
import Movies from './pages/Movies';
import "./App.css"
import HQs from './pages/HQs';


const App: React.FC = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Personages" exact component={Personages} />
          <Route path="/Movies" exact component={Movies} />
          <Route path="/HQs" exact component={HQs} />

        </Switch>
      </Router>

    </>
  );
}

export default App;