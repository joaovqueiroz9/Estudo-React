"use client";
import { useState } from "react"

export default function MyButton() {
    const [count, setCount] = useState(0);

    // function handleClick() {
    //     setCount(count => count + 1);
    // }

    return (
        <button onClick={() => setCount(count => count + 1)}>
            Esse botão foi clicado {count} vezes
        </button>
    )
}