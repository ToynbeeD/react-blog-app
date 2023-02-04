import { useState } from "react"
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(() => count + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button className={styles.btn} onClick={increment}>Increment</button>
        </div>
    )
}