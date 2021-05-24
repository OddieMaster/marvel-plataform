import React from 'react';
import Login from './pages/Login/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personages from "./pages/Personages";
import "./App.css"


const App: React.FC = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Personages" exact component={Personages} />          
          
        </Switch>
      </Router>

    </>
  );
}

export default App;