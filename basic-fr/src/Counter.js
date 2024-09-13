import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0)
    const handleIncrease = () => {
        setValue(value + 1)
    }
    const handleDecrease = () => {
        setValue(value - 1)
    }
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => handleIncrease()}>Add</button>
            <button onClick={() => handleDecrease()}>Sub</button>
        </div>
    )
}

export default Counter