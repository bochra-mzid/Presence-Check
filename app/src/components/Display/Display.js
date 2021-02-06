import React,{useContext} from 'react'
import {ListGroup} from 'react-bootstrap'
import Bouton from '../Bouton/Bouton'
import './Display.css'

function Display(props) {
    return(
        <ListGroup>
            {props.list.map((item) => (
                <ListGroup.Item className="list">
                    <div style={{float: "left"}}>{item.name}</div>
                    <Bouton i={item}/>
                </ListGroup.Item>
                ))}
        </ListGroup>
    )
}
export default Display