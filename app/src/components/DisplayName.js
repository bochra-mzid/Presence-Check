import React from 'react'
import { Members } from '../Data/Data';
import { ListGroup } from 'react-bootstrap'


function DisplayName(props) {
    return (
        
            <ListGroup.Item>
                
                <div>{props.e}</div>

            </ListGroup.Item>
    )

}
export default DisplayName