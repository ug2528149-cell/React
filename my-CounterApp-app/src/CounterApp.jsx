import React, {useState} from 'react'
function CounterApp(){

    const [count, setCount] =useState(0)


    function handleIncrementChange(){
        return setCount(count +1)
    }

    function handleDecrementChange(){
        if(count > 0){
            return setCount(count -1)
        }
        count = count;
    }

    return(
        <div className='button-container'>
            <p>count:{count}</p>
            <button className='but'
            onClick={handleIncrementChange}>
                Increment
                </button>

            <button className='but'
            onClick={handleDecrementChange}>
                Decrement
                </button>

        </div>
    )
}
export default CounterApp