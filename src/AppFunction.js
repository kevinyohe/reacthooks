import React, {useState} from 'react'


export const AppFunction = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () =>{
        setIsOn(prevIsOn => !prevIsOn)
    }

    const incrementCount = () =>{
        setCount(prevCount => prevCount+ 1)
    }
    return (
        <>
        <div>
            <button onClick={incrementCount}>I was clicked {count} times</button>
        </div>
        <h2>Toggle Light</h2>
    <div
    style={{
      height: '50px',
      width: '50px',
      background: isOn ? "yellow" : "grey"

    }}
    onClick={toggleLight}
    >
      </div>
        </>
    )
}

export default AppFunction;