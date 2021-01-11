import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Btn from './Btn'

function Display(props) {
    return(
        <ListGroup>

            {props.l.map(item => (
                <ListGroup.Item className="list">

                    <div style={{float: "left"}}>{item.name}</div>
                    <Btn i={item}/>

                </ListGroup.Item>
                ))}

        </ListGroup>
    )
}

export default Display