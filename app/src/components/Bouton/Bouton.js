import React from 'react'
import {Button} from 'react-bootstrap'
import './Bouton.css'
function Bouton(props){
    if (props.i.etat=="Absent"){
        return(
            <Button variant="danger" className="Bouton">{props.i.etat}</Button>
        )
    }
    else if (props.i.etat=="Present"){
        return(
            <Button variant="success"className="Bouton" >{props.i.etat}</Button>
        )
    }
    else{
        return(
            <Button variant="warning" className="Bouton">{props.i.etat}</Button>
        )
    }
}
export default Bouton