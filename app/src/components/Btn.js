import React from 'react'
import {Button} from 'react-bootstrap'

function Btn(props){
    if (props.i.da=="Absent"){
        return(
            <Button variant="danger" style={{float:"right",width:"80px"}} >{props.i.da}</Button>
        )
    }
    else if (props.i.da=="Present"){
        return(
            <Button variant="success" style={{float:"right",width:"80px"}} >{props.i.da}</Button>
        )
    }
    else{
        return(
            <Button variant="warning" style={{float:"right", width:"80px"}} >{props.i.da}</Button>
        )
    }
}

export default Btn