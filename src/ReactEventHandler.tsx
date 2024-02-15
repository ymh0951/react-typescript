import { ChangeEvent, MouseEvent, useState } from 'react'

function ButtonHandler() {
    const showAlert = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }

    return <button onClick={showAlert}>show</button>
}

function InputHandler() {
    const [value, setValue] = useState<string>('')

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return <input type="text" value={value} onChange={inputChangeHandler} />
}

export { ButtonHandler, InputHandler }