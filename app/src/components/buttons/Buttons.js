import React, {useContext} from 'react'

import { Button } from 'react-bootstrap'
import { MyContext } from '../../Counter-context'
import './Buttons.css'

export function Buttons() {
    const {Members}= useContext(MyContext)
    const {all,setAll} = useContext(MyContext)
    const {counter,setCounter} = useContext(MyContext)
    const addItem = (etat) => {
        setAll([...all, {
            name: Members[counter].name,
            etat: etat,
        }
        ])}
    return (
        <div className="but">
            <Button variant="outline-success" onClick={() => {
                addItem("Present");
                setCounter(counter + 1)
            }} >Present</Button>

            <Button variant="outline-warning" onClick={() => {
                addItem("Excused");
                setCounter(counter + 1)
            }} >Excused</Button>

            <Button variant="outline-danger" onClick={() => {
                addItem("Absent");
                setCounter(counter + 1)
            }}>Abscent</Button>
        </div>
    )
}
