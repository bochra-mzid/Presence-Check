import React, {useState, useEffect} from 'react'
import { Button,Tab, Tabs } from 'react-bootstrap'
import { Members } from '../Data/Data';
import Display from './Display'

function Check() {
    const [count, setCount] = useState(0)

    const [all, setAll] = useState([])

    const addItem = (etat) => {
        setAll([...all, {
            name: Members[count].name,
            da: etat,
        }
        ])
        setCount(count + 1)
    }

    const pres = all.filter(elt => elt.da == "Present")
    const abs = all.filter(elt => elt.da == "Absent")
    const exc = all.filter(elt => elt.da == "Excused")

    if (count < 10) {
        return (

            <body>

                <div className="names">

                    <h1 >{(Members[count]).name}</h1>

                </div>

                <div className="buttons">

                    <Button variant="outline-success" onClick={() => addItem("Present")} className="but">Present</Button>
                    <Button variant="outline-warning" onClick={() => addItem("Excused")} className="but">Excused</Button>
                    <Button variant="outline-danger" onClick={() => addItem("Absent")} className="but">Abscent(e)</Button>

                </div>

                <div style={{ width: "70%", margin: "auto" }}>

                    <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" style={{ marginTop: "5%", marginBottom: "3%", texrAlign: "center" }} >
                        <Tab eventKey="All" title="All">
                            <Display l={all} />
                        </Tab>
                        <Tab eventKey="Present" title="Present">
                            <Display l={pres} />
                        </Tab>
                        <Tab eventKey="Absent" title="Absent"  >
                            <Display l={abs} />
                        </Tab>
                        <Tab eventKey="Excused" title="Excused"  >
                            <Display l={exc} />
                        </Tab>
                    </Tabs>

                </div>

            </body>
        )
    }
    else {
        return (
            <body>

                <div style={{ width: "70%", margin: "auto" }}>

                    <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" style={{ marginTop: "5%", marginBottom: "3%", texrAlign: "center" }}>
                        <Tab eventKey="All" title="All">
                            <Display l={all} />
                        </Tab>
                        <Tab eventKey="Present" title="Present">
                            <Display l={pres} />
                        </Tab>
                        <Tab eventKey="Absent" title="Absent" >
                            <Display l={abs} />
                        </Tab>
                        <Tab eventKey="Excused" title="Excused" >
                            <Display l={exc} />
                        </Tab>
                    </Tabs>

                </div>

            </body>
        )
    }
}

export default Check