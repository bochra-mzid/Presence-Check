import  React from 'react'
import { Switch, Route } from 'react-router-dom'
import Start from './components/start/Start'
import Check from "./components/check/Check"

function MainRouter(){
    return(
    <Switch>
        <Route exact path='/' component={Start}/>
        <Route  path="/home" component={Start}/>
        <Route  path="/Appel/" component={Check}/>
    </Switch>
    )
}

export default MainRouter 