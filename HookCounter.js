import React, {useState} from 'react'

function HookCounter(){
    const[count,setCount]=useState(0)

    const changeHandler = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <button onClick={changeHandler}>Count{count}</button>

        </div>
    )
}
export default HookCounter