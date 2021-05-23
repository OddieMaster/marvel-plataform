import React from 'react';
import Login from './pages/Login/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";




const App: React.FC = () => {

  return (
    <>

      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homePage" exact component={HomePage} />
        </Switch>
      </Router>

    </>
  );
}

export default App;