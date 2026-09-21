
import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState()
    
    const updateName =() =>{
        setName('Manzi')
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick ={updateName}>SetName</button>
        </div>
    )
}
export default MyComponent

