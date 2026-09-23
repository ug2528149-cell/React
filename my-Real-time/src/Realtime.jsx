
import React, {useState} from 'react'

function Realtime(){

    const [text, setText] = useState("")

    function handleRealChange(e){
        setText(e.target.value)
    }

    return(
        <div className='container'>
            <input className='input' value={text} type='text' onChange={handleRealChange} placeholder='Type something...!'/>

            <p className='output'>{text || "Your text will appear here..."}</p>
        </div>
    )

}
export default Realtime