import React, {useState} from 'react'

// useRef作用
export function UseDefineHookTest() {
    const useCalc = () => {
        const [x] = useState(1)
        const [y] = useState(1)
        const add = (x, y) => {
            return x + y
        }
        const sub = (x, y) => {
            return x - y
        }
        const mul = (x, y) => {
            return x * y
        }
        const div = (x, y) => {
            return x / y
        }
        return {x, y, add, sub, mul, div}
    }
    const {x, y, add, sub, mul, div} = useCalc()
    return (
        <>
            <div>{add(x, y)}</div>
            <div>{sub(x, y)}</div>
            <div>{mul(x, y)}</div>
            <div>{div(x, y)}</div>
        </>
    )
}
