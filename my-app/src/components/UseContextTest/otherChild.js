// 创建子组件
import React, {useContext} from "react";

import {MyContext} from './myContext'

export function OtherChild() {
    const obj = useContext(MyContext)
    return (
        <div>{obj.name}</div>
    )
}
