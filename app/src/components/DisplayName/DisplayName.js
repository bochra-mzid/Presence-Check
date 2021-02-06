import React,{useContext} from 'react'

import './DisplayName.css'
import {MyContext} from '../../Counter-context'

export function DisplayName(){
    const {Members}= useContext(MyContext)
    const {counter} = useContext(MyContext)

    return(
        <div className="names">

            <h1>{Members[counter].name}</h1>
        
        </div>

        )
}
