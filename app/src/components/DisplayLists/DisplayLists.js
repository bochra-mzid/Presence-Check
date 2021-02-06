import React, { useContext } from 'react'
import Display from '../Display/Display'
import { Tab, Tabs } from 'react-bootstrap'
import './DisplayLists.css'
import { MyContext } from '../../Counter-context'

function DisplayLists() {

    const { all } = useContext(MyContext)
    const present = all.filter(elt => elt.etat == "Present")
    const absent = all.filter(elt => elt.etat == "Absent")
    const excused = all.filter(elt => elt.etat == "Excused")

    return (
        <div className="lists">
            <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" >
                <Tab eventKey="All" title="All">
                    <Display list={all} />
                </Tab>
                <Tab eventKey="Present" title="Present">
                    <Display list={present} />
                </Tab>
                <Tab eventKey="Absent" title="Absent">
                    <Display list={absent} />
                </Tab>
                <Tab eventKey="Excused" title="Excused">
                    <Display list={excused} />
                </Tab>
            </Tabs>
        </div>

    )
}
export default DisplayLists