
import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest")

    const [age, setAge] = useState(0)

    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('Manzi')
    }

    const incrementage = () => {
        setAge(age + 2)
    }

    const toggleEmployedStatus = () =>{
        setIsEmployed(! isEmployed)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>SetName</button>

            <p>Age: {age}</p>
            <button onClick={incrementage}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes": "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

        </div>
    )
}
export default MyComponent

