import React, {useEffect, useLayoutEffect, useState} from 'react'

// useLayoutEffect作用在浏览器绘制之前执行, 会阻塞
export function UseLayoutEffectTest() {
    const [count, setCount] = useState(1)
    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('useEffect-return')
        }
    })
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        return () => {
            console.log('useLayoutEffect-return')
        }
    })
    return (
        <>
            <div>
                <div>{count}</div>
                <button onClick={() => {
                    setCount(count+1)
                }}>click
                </button>
            </div>
        </>
    )
}
