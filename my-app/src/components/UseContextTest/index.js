import React, {useState, useContext, createContext} from 'react'
import { MyContext } from "./myContext";
import {OtherChild} from './otherChild'

// useContext作用于父子组件传值 配合 createContext使用
export function UseContextTest() {
    const [obj] = useState({name:'san'})
    // 创建容器
    const ParentContext = createContext(null)

    // 创建子组件
    const CurrentChild = () => {
        const obj = useContext(ParentContext)
        return (
            <div>{obj.name}</div>
        )
    }
    return (
        <>
            <div>
                <ParentContext.Provider value={obj}>
                    <CurrentChild/>
                </ParentContext.Provider>
            </div>
            <div>
                <MyContext.Provider value={obj}>
                    <OtherChild/>
                </MyContext.Provider>
            </div>
        </>
    )
}
