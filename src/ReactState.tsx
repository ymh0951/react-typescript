import { useState } from 'react'

function ReactState() {
    const [counter, setCounter] = useState<number>(0)

    return <div>{counter}</div>
}

export default ReactState;