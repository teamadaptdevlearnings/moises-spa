import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
import './styles/main.css';


function App() {
  return (
    <>
        <Header />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
        </Switch>        
    </>
  );

}

export default App;
