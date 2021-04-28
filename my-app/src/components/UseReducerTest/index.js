import React, {useRef} from 'react'

// useRef作用
// 1获取dom元素
// 2存值
export function UseRefTest() {
    const ref1 = useRef(null)
    const ref2 = useRef({name: 'san'})
    return (
        <>
            {/*1获取dom元素*/}
            <div>
                <input ref={ref1} type="text"/>
                <button onClick={() => {
                    console.log(ref1.current.value)
                }}>click
                </button>
            </div>
            {/*2存值*/}
            <div>
                <button onClick={() => {
                    ref2.current.name = ref1.current.value
                    console.log(ref2)
                }}>click
                </button>
            </div>
        </>
    )
}
