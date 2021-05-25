import React from 'react';
import Login from './pages/Login/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Personages from "./pages/Personages";
import Movies from './pages/Movies';
import "./App.css"


const App: React.FC = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Personages" exact component={Personages} />  
          <Route path="/Movies" exact component={Movies} />          
          
        </Switch>
      </Router>

    </>
  );
}

export default App;