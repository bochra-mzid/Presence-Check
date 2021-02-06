import React, { useContext } from 'react'
import { DisplayName } from '../DisplayName/DisplayName'
import './check.css'
import DisplayLists from '../DisplayLists/DisplayLists'
import { Buttons } from '../buttons/Buttons'
import { MyContext } from '../../Counter-context'

function Check() {
    const {Members}= useContext(MyContext)
    const { counter } = useContext(MyContext)
    if (counter < Members.length) {
        return (
            <div>
                <DisplayName />
                <Buttons />
                <DisplayLists />
            </div>
        )
    }
    else {
        return (
            <div>
                <DisplayLists />
            </div>
        )
    }
}
export default Check