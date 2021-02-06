import React, { createContext, useState } from 'react'

export const MyContext = createContext();


export function ContextProvider({ children }) {
    const [Members, setMembers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setMembers(data)
            console.log(data)
            setIsLoading(false)
        })

    const [counter, setCounter] = useState(0);
    const [all, setAll] = useState([])
    return (
        <MyContext.Provider value={{ all, setAll, counter, setCounter, Members }}>{children}</MyContext.Provider>
    )
}

