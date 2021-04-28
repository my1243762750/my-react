import React, {useReducer} from 'react'
import {MyReducer} from "./reducer";
import {Child1} from "./child1";
import {Child2} from "./child2";

// useReducer
export function UseReducerTest() {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'setName':
                return {
                    ...state,
                    name: 'si'
                }
            case 'setAge':
                return {
                    ...state,
                    age: 19
                }
            default:
                return state
        }
    }
    const state = {name: 'san', age: 19}
    const [store, dispatch] = useReducer(reducer, state)
    return (
        <>
            <div>
                <span>{store.name}-{store.age}</span>
                <button onClick={() => {
                    dispatch({
                        type: 'setName'
                    })
                }}>click
                </button>
            </div>
            <div>
                <MyReducer>
                    <Child1/>
                    <Child2/>
                </MyReducer>
            </div>
        </>
    )
}
