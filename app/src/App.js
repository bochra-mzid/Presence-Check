import React,{useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from './components/Start'
import Check from "./components/Check";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  
  useEffect(() => {
        window.history.back();
    }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Start}/>
          <Route  path="/home" component={Start}/>
          <Route  path="/Appel/" component={Check}/>
        </Switch>
      </BrowserRouter>
    </div>
    

  );
}

export default App
