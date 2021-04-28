import React, {useState, useMemo} from 'react'

// useMemo主要作用是来提高渲染性能, 相当于class组件的shouldComponentUpdate
export function UseMemoTest() {
    const [count,setCount] = useState(1)
    const memoCount = useMemo(() => {
        return count
    }, [])
    const Child = ({count, setCount}) => {
        return (
            <div>
                <div>Child Component</div>
                <span>{count}</span>
                <button onClick={() => {
                    setCount(count+1)
                }}>click
                </button>
            </div>
        )
    }
    return (
        <>
            <div>
                <span>{memoCount}</span>
                <button onClick={() => {
                    setCount(count+1)
                }}>click
                </button>
            </div>
            <div>
                <Child count={count} setCount={setCount}/>
            </div>
        </>
    )
}
