import React from 'react';
import Login from './pages/Login/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personages from "./pages/Personages";
import PersonagesTwo from './pages/PersonagesTwo';
import PersonagesInfoRight from './components/PersonagesInfoRight';
import "./App.css"


const App: React.FC = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Personages" exact component={Personages} />
          <Route path="/PersonagesTwo" exact component={PersonagesTwo} />
          <Route path="/PersonagesInfoLeft" exact component={PersonagesInfoRight} />
          <Route path="/PersonagesInfoRight" exact component={PersonagesInfoRight} />

        </Switch>
      </Router>

    </>
  );
}

export default App;