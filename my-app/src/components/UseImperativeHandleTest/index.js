import React, {useRef, useImperativeHandle, forwardRef, useState} from 'react'

// useImperativeHandle的作用是暴露自定义ref，将子组件的值传递给父组件
export function UseImperativeHandleTest() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const MyForwardRef1 = forwardRef((props, ref) => {
        return (
            <div>
                <h3 ref={ref}>hello</h3>
                <h4>world</h4>
            </div>
        )
    })
    const MyForwardRef2 = forwardRef((props, ref) => {
        const [count, setCount] = useState(1)
        const [num, setNum] = useState(1)
        const inputRef = useRef(null)
        useImperativeHandle(ref, () => ({
            name: 'san',
            focus: () => {
                inputRef.current.focus()
            },
            count,
            num
        }), [count])
        return (
            <div>
                <h3 ref={ref}>hello</h3>
                <h4>world</h4>
                <input type="text" ref={inputRef}/>
                <div>
                    <span>{count}</span>
                    <button onClick={() => {
                        setCount(count+1)
                    }}>click
                    </button>
                </div>
                <div>
                    <span>{num}</span>
                    <button onClick={() => {
                        setNum(num+1)
                    }}>click
                    </button>
                </div>
            </div>
        )
    })
    return (
        <>
            <div>
                <MyForwardRef1 ref={ref1}/>
                <div>
                    <button onClick={() => {
                        console.log(ref1)
                    }}>click
                    </button>
                </div>
            </div>
            <div>
                <MyForwardRef2 ref={ref2}/>
                <div>
                    <button onClick={() => {
                        ref2.current.focus()
                        console.log(ref2)
                    }}>click
                    </button>
                </div>
            </div>
        </>
    )
}
