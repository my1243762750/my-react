import React, {useState} from 'react'

export function UseStateTest() {
    const [count, setCount] = useState(0)
    // setObj必须返回新对象
    const [obj, setObj] = useState({
        name: 'zhangsan',
        age: 19
    })
    // setArr必须返回新对象
    const [arr, setArr] = useState([
        1,2,3
    ])
    // 返回的什么类型，就以什么类型方式设置
    const [func, setFunc] = useState(() => {
        return [1,2,3]
    })
    return (
        <>
            <div>
                <div>{count}</div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>click
                </button>
            </div>

            <div>
                <div>{obj.name}--{obj.age}</div>
                <button onClick={() => {
                    setObj({
                        ...obj,
                        name: 'lisi'
                    })
                }}>click
                </button>
            </div>

            <div>
                <div>{arr}</div>
                <button onClick={() => {
                    // 第一种方式
                    // arr.push(4)
                    // setArr([...arr])
                    // 第二种方式
                    setArr(() => {
                        arr.push(4)
                        return [...arr]
                    })
                }}>click
                </button>
            </div>

            <div>
                <div>{func}</div>
                <button onClick={() => {
                    // 第一种方式
                    // arr.push(4)
                    // setArr([...arr])
                    // 第二种方式
                    setFunc(() => {
                        arr.push(4)
                        return [...arr]
                    })
                }}>click
                </button>
            </div>
        </>
    )
}
