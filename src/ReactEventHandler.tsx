import { ChangeEvent, MouseEvent, useState } from 'react'

function ButtonHandler() {
    const showAlert = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event);
    }

    return <button onClick={showAlert}>show</button>;
}

function InputHandler() {
    const [todo, setTodo] = useState<string>('')

    const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    return <input type="text" value={todo} onChange={updateTodo} />;
}

export { ButtonHandler, InputHandler };