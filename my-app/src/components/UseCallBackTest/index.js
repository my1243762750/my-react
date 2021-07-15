import React, {useState, useCallback} from 'react'

// useCallback主要作用是来提高渲染性能, 相当于class组件的shouldComponentUpdate, 和useMemo不同的是他缓存的是一个函数
export function UseCallbackTest() {
    const [count,setCount] = useState(1)
    const callback = useCallback(() => {
        console.log('callback');
        return count
    }, [])
    console.log('hello world');
    return (
        <>
            <div>
                <div>{count}</div>
                <div>{callback()}</div>
                <button onClick={() => {
                    setCount(count+1)
                }}>click
                </button>
            </div>
        </>
    )
}
